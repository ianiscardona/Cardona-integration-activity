import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DogGenerator() {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("Look at this dude!");

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = () => {
    axios("https://dog.ceo/api/breeds/image/random")
      .then((response) => setImageUrl(response.data.message))
      .catch((error) => console.log(error));
  };

  const captions = [
    "Good boy!",
    "Let him cook!",
    "He got the dawg in him!",
    "*Lightskin stare*",
    "Whut the hell! Oh my God- no waa-hiyaaay~",
    "Look at this dude!",
    "The Rizzard of Oz",
    "Bro think he Carti!",
  ];

  const getRandomCaption = () => {
    const randomIndex = Math.floor(Math.random() * captions.length);
    return captions[randomIndex];
  };

  const handleGenerateDog = () => {
    setCaption(getRandomCaption());
    fetchDogImage();
  };

  return (
    <div className="flex flex-col items-center">
      <img
        className="rounded-lg shadow-lg w-96 h-auto"
        src={imageUrl}
        alt="dog"
      />
      <p className="text-center text-gray-600 mt-4 font-semibold text-lg">
        {caption}
      </p>
      <button
        className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-gray-800"
        onClick={handleGenerateDog}
      >
        Generate Dog
      </button>
    </div>
  );
}
