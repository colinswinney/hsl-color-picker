import { useState, useEffect } from "react"
import "./App.css"
import Nav from "./components/nav";
import Header from "./components/header";
import Previews from "./components/previews";
import Footer from "./components/footer";
import SliderInput from "./components/slider-input"
import VariationColors from "./components/variation-colors";

function App() {

  const [hue, setHue] = useState(() => {
    const savedHue = localStorage.getItem("hue");

    if (savedHue) {
      return JSON.parse(savedHue)
    } else {
      return "180"
    }
  })
  const [saturation, setSaturation] = useState(() => {
		const savedSaturation = localStorage.getItem("saturation");

		if (savedSaturation) {
			return JSON.parse(savedSaturation);
		} else {
			return "50";
		}
	})
  const [lightness, setLightness] = useState(() => {
		const savedLightness = localStorage.getItem("lightness");

		if (savedLightness) {
			return JSON.parse(savedLightness);
		} else {
			return "50";
		}
	})
  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem("color")

    if (savedColor) {
      return JSON.parse(savedColor)
    } else {
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
  });

  useEffect(() => {
		localStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("hue", JSON.stringify(hue));
    localStorage.setItem("saturation", JSON.stringify(saturation));
    localStorage.setItem("lightness", JSON.stringify(lightness));
	}, [color, hue, saturation, lightness]);

  function handleHueChange(e) {
    setHue(e.target.value)
    setColor(`hsl(${e.target.value}, ${saturation}%, ${lightness}%)`);
  }

  function handleSaturationChange(e) {
		setSaturation(e.target.value);
    setColor(`hsl(${hue}, ${e.target.value}%, ${lightness}%)`);
	}

  function handleLightnessChange(e) {
		setLightness(e.target.value);
    setColor(`hsl(${hue}, ${saturation}%, ${e.target.value}%)`);
	}

  return (
		<div className="app" id="HSL">
			<div className="container">
				<Nav color={color} />
				<Header
					color={color}
					hue={hue}
					saturation={saturation}
					lightness={lightness}
				>
					<SliderInput
						name="hue"
						max="360"
						value={hue}
						onSliderChange={handleHueChange}
					/>

					<SliderInput
						name="saturation"
						max="100"
						value={saturation}
						onSliderChange={handleSaturationChange}
					/>

					<SliderInput
						name="lightness"
						max="100"
						value={lightness}
						onSliderChange={handleLightnessChange}
					/>
				</Header>

				<main>
					<VariationColors
						name="Shades"
						hue={hue}
						saturation={saturation}
						lightness={lightness}
					/>

					<VariationColors
						name="Tints"
						hue={hue}
						saturation={saturation}
						lightness={lightness}
					/>

					<VariationColors
						name="Harmonies"
						hue={hue}
						saturation={saturation}
						lightness={lightness}
					/>
					<Previews color={color} />
				</main>

				<Footer color={color} />
			</div>
		</div>
	);
}

export default App;
