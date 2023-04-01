import React from "react";
import "../style/Home.css";

import Product from "./Product";
import Slider from "./Slider";

function Home() {
  const PF = "https://shopezy-api.onrender.com/images/";

  return (
    <div className="home">
      <div className="homeContainer">
        <div>
          <Slider />
        </div>

        <div className="homeRow">
          <Product
            id="1234341"
            title="Ghosts of The Silent Hills "
            image={PF + "silentHills.png"}
            rating={4}
            price={199}
            description={
              "Born in Shimla in 1955, Anita Krishan spent the initial twenty-two years of her life in this pristine Himalayan town, earning her master's degree in English literature from Himachal University, and moving on to a career of introducing delights of the language to her young learners. In her long tenure as an educator, she has enriched the lives of countless students with the mystery of the narrative."
            }
            folder="ghost"
          />

          <Product
            id="1234342"
            title="Sennheiser Professional Audio HD"
            image={PF + "sennhaiser.png"}
            rating={5}
            price={7280}
            description={
              "The HD 280 Pro is Sennheiser's most significant closed, around-the-ear headphone to be introduced in years. Designed to exceed the demands of the professional environment, the HD 280 Pro boasts extremely robust construction combined with the sound quality, modular design and aggressive noise isolation that is necessary in the field. The unique collapsible design, combined with swiveling ear cups, offers maximum flexibility in any application."
            }
            folder="sennheiser"
          />

          <Product
            id="123434235"
            title="Sony DualSense Wireless Controller"
            image={PF + "remote.png"}
            grow={true}
            rating={4.5}
            price={5099}
            description={
              "Bring gaming worlds to life feel your in-game actions and Environment simulated through haptic feedback2, experience varying force and tension at your fingertips with adaptive triggers2"
            }
            folder="controller"
          />
        </div>

        <div className="homeRow">
          <Product
            id="1234343"
            title="Samsung Galaxy M12"
            image={PF + "galaxyM12.png"}
            rating={3}
            price={10499}
            description={
              "48MP+5MP+2MP+2MP Quad camera setup- True 48MP (F 2.0) main camera + 5MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 8MP (F2.2) front came.Android 11, v11.0 operating system,One UI 3.1, with 8nm Power Efficient Exynos850 (Octa Core 2.0GH."
            }
            folder="m12"
          />

          <Product
            id="1234344"
            title="Echo Dot"
            image={PF + "ecoDot.png"}
            rating={4}
            price={4499}
            description={
              "Alexa, the brain behind Echo Dot, is built in the cloud, so it is always getting smarter. The more you use Dot, the more Alexa adapts to your speech patterns and vocabulary. Using Alexa is as simple as asking a question - just ask and Alexa will respond instantly"
            }
            folder="eco"
          />

          <Product
            id="1234345"
            title="Nikon D7500 20.9MP Digital SLR Camera"
            image={PF + "nikon.png"}
            rating={5}
            price={94950}
            description={
              "4K UHD (30p) high-quality video, compatible with MP4 format for easy playback on smart devices.Slimmer body with an easier-to-hold deep grip enabled by the monocoque structure, while weighing just approx. 640 g/1 lb 6.6 oz."
            }
            folder="nikon"
          />

          <Product
            id="12343434576"
            title="Motorola Tab"
            image={PF + "tablet.png"}
            rating={3.5}
            price={22999}
            grow={true}
            description={
              "Motorola Tab (11inch, 4GB, 64GB, WiFi+LTE Calling), Modernist Teal with Mediatek Helio G90T Processor, Quadcore Speakers with Dolby Atmos, Face Unlock and Google Assistant. 11 inch 2K (2000*1200) FHD IPS Display| 400 nits brightness| Face Unlock| Dolby Vision"
            }
            folder="tablet"
          />
        </div>

        <div className="homeRow">
          <Product
            id="1234346"
            title="Samsung 34 inch Curved Monitor"
            image={PF + "samsung34inch.png"}
            rating={4}
            price={46440}
            description={
              "Vivid scenes wrap around you. The all-encompassing 1000R display fills every part of your peripheral vision and draws you right into the character's shoes. Experience a level of gaming more heart-pounding than anything before."
            }
            folder="samsung lcd"
          />

          <Product
            id="1234347"
            title="Acer Nitro 5"
            image={PF + "acernitro.png"}
            rating={4}
            price={109990}
            description={
              "Explore games in greater detail with the sharp visuals of a 15.6-inch FHD IPS display. Enjoy smooth, blur-free gameplay with a 144Hz refresh rate and a 3ms response time.With a boosted screen-to-body ratio of 80% and narrow 7.02mm bezels, get set to experience lifelike colors using a 72% NTSC, 300 nits panel."
            }
            folder="acer"
          />
          <Product
            id="123434723423"
            title="JBL Bar 9.1"
            image={PF + "jblbar.png"}
            rating={4.5}
            grow= {true}
            price={79990}
            description={
              "True Wireless Surround Home Theatre with Dolby Atmos, DTS:X 3D Sound, 9.1 Channel, 4K Ultra HD Pass-Through with Dolby Vision, HDMI ARC, Bluetooth, Built-in Chromecast & AirPlay 2 (820W)"
            }
            folder="jbl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
