import { useEffect, useState } from "react";

export interface Image {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Button {
  text: string;
  href: string;
}

export interface MockData {
  mediaBanner: {
    img?: Image;
    leadingText?: string;
    heading?: string;
    orientation?: "left" | "right";
    button?: Button;
  };
  itemRow: {
    heading?: string;
    items?: {
      img?: Image;
      heading?: string;
      body?: string;
    }[];
    button?: Button;
  };
}

const MOCK_DATA = {
  mediaBanner: {
    img: {
      src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
      alt: "Happy baby playing with a toy",
      caption: "Happy baby playing with a toy",
    },
    leadingText: "For all their firsts",
    heading: "Joyful play at every stage, ages 0-4",
    orientation: "right",
    button: {
      text: "Explore the Play Kits",
      href: "https://lovevery.com/products/the-play-kits/",
    },
  },
  itemRow: {
    heading:
      "The right playthings, activities, and guidance delivered at the right time",
    items: [
      {
        heading: "Take out the guess work",
        body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
        img: {
          src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
          alt: "An icon of a baby",
        },
      },
      {
        heading: "Take out the guess work",
        body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
        img: {
          src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
          alt: "An icon of a baby",
        },
      },
      {
        heading: "Take out the guess work",
        body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
        img: {
          src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
          alt: "An icon of a baby",
        },
      },
      {
        heading: "Take out the guess work",
        body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
        img: {
          src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
          alt: "An icon of a baby",
        },
      },
      {
        heading: "Take out the guess work",
        body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
        img: {
          src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
          alt: "An icon of a baby",
        },
      },
    ],
    button: {
      text: "Explore the Play Kits",
      href: "https://lovevery.com/products/the-play-kits/",
    },
  },
};

export function useData() {
  const [data, setData] = useState<typeof MOCK_DATA>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(MOCK_DATA);
      setIsLoading(false);
    }, 2000);
  }, []);

  return {
    data,
    error: false,
    isLoading,
  };
}
