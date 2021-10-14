import Clipboard from "react-clipboard.js";

function ButtonGroup({color, hue, saturation, lightness}) {

    function hslToHex(h, s, l) {
        l /= 100;
        const a = (s * Math.min(l, 1 - l)) / 100;
        const f = (n) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color)
                .toString(16)
                .padStart(2, "0");
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    function hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return "rgb(" + r + "," + g + "," + b + ")";
    }

	return (
		<>
			<Clipboard data-clipboard-text={color} button-title={`Copy ${color}`}>
				Copy HSL
			</Clipboard>

			<Clipboard
				data-clipboard-text={hslToHex(hue, saturation, lightness)}
				button-title={`Copy ${hslToHex(hue, saturation, lightness)}`}
			>
				Copy HEX
			</Clipboard>

			<Clipboard
				data-clipboard-text={hslToRgb(hue, saturation, lightness)}
				button-title={`Copy ${hslToRgb(hue, saturation, lightness)}`}
			>
				Copy RGB
			</Clipboard>
		</>
	);
};

export default ButtonGroup;