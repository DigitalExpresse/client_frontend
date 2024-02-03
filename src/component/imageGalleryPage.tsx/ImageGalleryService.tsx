export const handlePrev = (images: string[], selectedImage: string, setSelectedImage: React.Dispatch<React.SetStateAction<string>>, setSelectedImageClass: React.Dispatch<React.SetStateAction<string>>) => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
    setSelectedImageClass('fade-in'); // Ajoutez la classe fade-in
};

export const handleNext = (images: string[], selectedImage: string, setSelectedImage: React.Dispatch<React.SetStateAction<string>>, setSelectedImageClass: React.Dispatch<React.SetStateAction<string>>) => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
    setSelectedImageClass('fade-in'); // Ajoutez la classe fade-in
};

export const handleClose = (setSelectedImage: React.Dispatch<React.SetStateAction<string>>) => {
    setSelectedImage('');
};

export const handleClick = (image: string, setSelectedImage: React.Dispatch<React.SetStateAction<string>>) => {
    setSelectedImage(image);
};


export const handleCloseModal = (setSelectedImage: any, setSelectedImageClass: any): any => {
    setSelectedImage(''); // Ferme la modal en vidant l'URL de l'image
    setSelectedImageClass('fade-out'); // Applique une classe pour la transition de fermeture
    setTimeout(() => setSelectedImageClass(''), 500); // Retire la classe après la transition
};