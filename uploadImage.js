import cloudinary from './cloudinaryConfig.js';

export async function uploadImage(imagePath, publicId = null) {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      public_id: publicId, // ID opcional para identificar la imagen
      folder: 'wordpress-uploads', // Opcional: subcarpeta en Cloudinary
      resource_type: 'image', // Recurso de tipo imagen
    });

    console.log('Imagen subida:', result.secure_url);
    return result.secure_url; // URL segura de la imagen subida
  } catch (error) {
    console.error('Error subiendo la imagen a Cloudinary:', error);
    throw error;
  }
}
