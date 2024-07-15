import { arrangeImagesSequence } from "../../utils/arrangeImagesSequence";
import { config } from "../../config";
import axios from "axios";

export async function cloudinaryUpload(
  files,
  folder,
  setSuccessfulUploads,
  setFailedUploads
) {
  return Promise.all(
    Object.values(files).map(async (file, index) => {
      const data = new FormData();

      data.append("file", file);
      data.append("upload_preset", "elujivfm");
      data.append("cloud_name", "dsuiwxwkg");
      data.append("folder", folder);

      //throttle every 5 iterations
      if (index % 5) {
        setTimeout(() => {}, 5000);
      }
      try {
        await fetch("https://api.cloudinary.com/v1_1/dsuiwxwkg/image/upload", {
          method: "POST",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            // uploadedImages.push(data.url);
            setSuccessfulUploads((prev) => [...prev, data.url]);
          });
      } catch (err) {
        setFailedUploads((prev) => [...prev, file]);
        console.log(err);
      }
    })
  )
    .then(() => {
      return {
        uploadedImages,
        failedUploads,
      };
    })
    .catch((error) => {
      return error;
    });
}

export async function uploadImageURLsToSheets(successfulUploads, sheet) {
  try {
    const existingImages = await getExistingImages(sheet);

    const imageArray = JSON.parse(
      JSON.stringify([...existingImages.data.result, ...successfulUploads])
    );
    const featuredImage = imageArray.filter((image) => {
      if (image && image.includes("featured")) {
        return image;
      }
    });

    const arrangedImages = arrangeImagesSequence(imageArray, sheet);

    if (featuredImage.length > 0) {
      await uploadFeaturedImage(featuredImage[0]);
    }

    return axios.post(`${config.backendLocal}/insert-images`, {
      images: arrangedImages,
      sheet: sheet,
    });
  } catch (error) {
    return error;
  }
}

async function getExistingImages(sheet) {
  const response = await axios.get(`${config.backendLocal}/images/${sheet}`);
  return response;
}

async function uploadFeaturedImage(image, sheet) {
  return await axios.post(`${config.backendLocal}/insert-images`, {
    images: arrangedImages,
    sheet: sheet,
  });
}
