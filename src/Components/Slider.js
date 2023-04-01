import "../style/slider.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItems from "./SliderItems";

export default function Slider() {
  const PF = "https://shopezy-api.onrender.com/images/";

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
      partialVisible: true,
      partialVisibleGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      partialVisible: true,
      partialVisibleGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider">
      <Carousel responsive={responsive} className="my-slider">
        <SliderItems
          id="12343471"
          background="product--image bg-boat"
          title="BoAt Airdopes"
          image={PF + "boatbuds.png"}
          rating={4}
          price={7856}
          description={
            "boAt Airdopes 121v2 in-Ear True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators, Lightweight Earbuds & Multifunction Controls (Active Black, with Mic)"
          }
          folder="boat1"
        />
        <SliderItems
          id="12343472"
          background="product--image bg-watch"
          title="Amazfit GTR 3"
          image={PF + "afsmartwatch.png"}
          rating={4}
          price={18990}
          description={
            "Amazfit GTR 3 Pro Smart Watch with Bluetooth Phone Calls, Alexa, GPS, WiFi, 12-Day Battery Life, 150 Sports Modes, 1.45 AMOLED Display, Blood Oxygen Heart Rate Tracking, Waterproof (Brown Leather)"
          }
          folder="amazefit"
        />
        <SliderItems
          id="12343473"
          background="product--image bg-lap"
          title="MSI Katana 17"
          image={PF + "Msi_ka_17.png"}
          rating={4}
          price={138990}
          description={
            "MSI Katana 17, Intel 13th Gen. i7-13620H, 44CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4050, 6GB GDDR6/Black/2.6Kg)"
          }
          folder="Msi_ka"
        />
        <SliderItems
          id="12343474"
          background="product--image bg-mouse"
          title="Lenovo Legion"
          image={PF + "legion_mouse.png"}
          rating={4}
          price={799}
          description={
            "Lenovo Legion M200 RGB Gaming Wired USB Mouse, Ambidextrous, 5-Buttons, Upto 2400 DPI with 4 Levels DPI Switch"
          }
          folder="legion-mouse"
        />
        <SliderItems
          id="12343475"
          background="product--image bg-boat"
          title="Tizum Mouse Pad"
          image={PF + "mouse_pad.png"}
          rating={5}
          price={149}
          description={
            "Tizum Mouse Pad - Computer Mouse Mat with Anti-Slip Rubber Base & Smooth Mouse Control with Spill-Resistant Surface for Laptop, Notebook, MacBook Pro, Gaming Computer "
          }
          folder="pad"
        />
        <SliderItems
          id="12343476"
          title="Marshall Willen"
          background="product--image bg-marshall"
          image={PF + "marshal.png"}
          rating={4}
          price={9999}
          description={
            "Marshall Willen Portable Bluetooth Speaker - Black & Brass"
          }
          folder="speaker"
        />
        <SliderItems
          id="12343477"
          background="product--image bg-player"
          title="CLAW Vinyl Player"
          image={PF + "claw.png"}
          rating={4}
          price={4890}
          description={
            "CLAW Stag Portable Vinyl Record Player Turntable with Built-in Stereo Speakers (Blue)"
          }
          folder="claw"
        />
      </Carousel>
    </div>
  );
}
