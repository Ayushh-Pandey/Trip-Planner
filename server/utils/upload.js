const multer = require('multer');
const { GridFsStorage } = require ('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: `mongodb+srv://Ayushh_Pandey:Ayushh2003@bookingapi.vdocye8.mongodb.net/BookingApi?retryWrites=true&w=majority&appName=AtlasApp`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});


module.exports =  multer({storage}); 