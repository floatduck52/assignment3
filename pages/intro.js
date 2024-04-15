import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Importing the useRouter hook

const IntroductionPage = () => {
    const router = useRouter(); // Initializing the useRouter hook

    const birdImages = [
        '/images/bird1.jpg',
        '/images/bird2.jpg',
        '/images/bird3.jpg',
        '/images/bird4.jpg',
        '/images/bird5.jpg',
        '/images/bird6.jpg',
    ];

    const birdImageClicked = (destination) => {
        router.push(destination); // Redirecting to the specified destination
    };

    return (
        <div className="container">
            <div>
                <h1>Introduction</h1>
                <p>Hi there! I'm Gyumin! I'm passionate about <strong>birds</strong>. I love collecting images of birds. In my free time, I enjoy searching for elegant bird pictures. Excited to share more with you!</p>
            </div>
            <div className="images-container">
                {birdImages.map((image, index) => (
                    <img key={index} src={image} alt={`Bird ${index + 1}`} onClick={() => birdImageClicked(`/page${index + 1}`)} />
                ))}
            </div>

            <style jsx>{`
                .container {
                    text-align: center;
                    font-family: Arial, sans-serif;
                    color: #333;
                }
                .images-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 20px;
                }
                img {
                    height: 300px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                img:hover {
                    transform: scale(1.05);
                }
                h1 {
                    margin-top: 20px;
                    font-size: 28px;
                    font-weight: bold;
                    color: #333;
                }
                p {
                    font-size: 18px;
                    margin-top: 10px;
                    line-height: 1.6;
                    color: #666;
                }
                strong {
                    color: #555;
                }
            `}</style>
        </div>
    );
};

export default IntroductionPage;
