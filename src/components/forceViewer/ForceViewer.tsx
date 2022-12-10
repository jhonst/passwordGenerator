import { Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./ForceViewer.css";

interface configurations {
    [idex: string]: number | boolean;
    long: number;
    letters: boolean;
    capitalLetters: boolean;
    numbers: boolean;
    symbols: boolean;
}

const ForceViewer = ({ objStatusForce }: { objStatusForce: configurations }) => {

    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
        calculateLevel(objStatusForce);
    }, [objStatusForce]);

    function calculateLevel(objStatus: configurations): number {
        console.log(objStatus);
        let level: number = 0;
        for (let key in objStatus) {
            if (key === "long") {
                if (objStatus.long >= 5) {
                    level++;
                }
                if (objStatus.long >= 10) {
                    level++;
                }
            } else {
                if (objStatus[key] === true) {
                    level++;
                }
            }
        }
        setCurrentLevel(level);
        return level;
    }

    function calculateColor(value: number): string {
        if (value <= 2) {
            return "red";
        } else if (value <= 3) {
            return "yellow";
        } else {
            return "green";
        }
    }

    return (
        <div className="container-force">
            <div className="color-blue-b color-white">
                Security level:
            </div>
            <div className="color-blue-b">
                <Progress colorScheme={calculateColor(currentLevel)} size='lg' value={currentLevel} max={6} />
            </div>
        </div>
    );
}

export { ForceViewer };