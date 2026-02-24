import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["public/images/*.{jpg,png}"], {
    destination: "public/images/optimized",
    plugins: [
      imageminMozjpeg({ quality: 60 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });

  await imagemin(["public/images/*.{jpg,png}"], {
    destination: "public/images/webp",
    plugins: [imageminWebp({ quality: 70 })]
  });

  console.log("Images compressed successfully");
})();