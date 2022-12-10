import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Checkbox, Stack, Button } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { usePassContext } from "../contextPassword/ContextPassword";
import { ForceViewer } from "../forceViewer/ForceViewer";
import "./OptionsConfig.css";

interface configurations {
    [idex: string]: number | boolean;
    long: number;
    letters: boolean;
    capitalLetters: boolean;
    numbers: boolean;
    symbols: boolean;
}

const OptionsConfig = () => {

    const lettersList: string = "abcdefghijklmnopqrstuvwxyz";
    const numbersList: string = "1234567890";
    const symbolsList: string = "!#$%&/()=?¡-_.,";

    const configInit: configurations = {
        long: 16,
        capitalLetters: true,
        letters: true,
        numbers: true,
        symbols: true
    }

    const { setPass } = usePassContext();
    const [config, setConfig] = useState<configurations>(configInit);

    const changeConfiguration = (key: string, value: number | boolean) => {
        if (config) {
            let updatedValue: configurations = config;

            updatedValue[key] = value;
            setConfig(config => ({
                ...config,
                ...updatedValue
            }));
        }
    }

    function emitNewPass(): void {
        const randomPass = getRandomPass(config);
        setPass(randomPass);
    }

    function getRandomPass({ long, letters, capitalLetters, numbers, symbols }: { long: number, letters: boolean, capitalLetters: boolean, numbers: boolean, symbols: boolean }): string {
        let randomPass: string = "";
        let validContidions: string[] = [];

        if (letters) validContidions.push(lettersList);
        if (capitalLetters) validContidions.push(lettersList.toUpperCase());
        if (numbers) validContidions.push(numbersList);
        if (symbols) validContidions.push(symbolsList);

        for (let i: number = 0; i < long; i++) {
            let pos = Math.floor(Math.random() * validContidions.length);
            randomPass = randomPass + getRandomChar(validContidions[pos]);
        }
        console.log(randomPass);
        return randomPass;
    }

    function getRandomChar(charters: string): string {
        const arrayCharacters: string[] = charters.split("");
        let posr = Math.floor(Math.random() * arrayCharacters.length);
        return arrayCharacters[posr];
    }


    return (
        <div className="text-options">
            
            <div className="slider-container">
                <p>Size: {config?.long}</p>
                <Slider colorScheme='teal' defaultValue={16} min={3} max={16} step={1} onChange={(value: number) => (changeConfiguration("long", value))}>
                    <SliderTrack>
                        <SliderFilledTrack className="slider-option" />
                    </SliderTrack>
                    <SliderThumb boxSize={6}/>
                </Slider>
            </div>

            <Stack spacing={5} direction='column'>
                <Checkbox colorScheme='teal' defaultChecked onChange={(event: ChangeEvent<HTMLInputElement>) => (console.log(changeConfiguration("letters", event.target.checked)))}>
                <p>Include lowercase letters</p> 
                </Checkbox>
                <Checkbox colorScheme='teal' defaultChecked onChange={(event: ChangeEvent<HTMLInputElement>) => (console.log(changeConfiguration("capitalLetters", event.target.checked)))}>
                <p>Include uppercase letters</p> 
                </Checkbox>
                <Checkbox colorScheme='teal' defaultChecked onChange={(event: ChangeEvent<HTMLInputElement>) => (console.log(changeConfiguration("numbers", event.target.checked)))}>
                    <p>Include numbers</p> 
                </Checkbox>
                <Checkbox colorScheme='teal' defaultChecked onChange={(event: ChangeEvent<HTMLInputElement>) => (console.log(changeConfiguration("symbols", event.target.checked)))}>
                <p>Include symbols</p> 
                </Checkbox>
            </Stack>

            <ForceViewer objStatusForce={config} />

            <Button colorScheme='blue' size="lg" width="100%" disabled={(!config.letters && !config.capitalLetters && !config.numbers && !config.symbols)} onClick={emitNewPass}>Generate</Button>
        </div>
    );
}

export { OptionsConfig };