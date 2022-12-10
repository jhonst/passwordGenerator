import "./PassView.css";
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { usePassContext } from "../contextPassword/ContextPassword";
import { useState } from "react";

const PassView = () => {

    //use context
    //const { pass, setPass } : PassInter = useContext( ContextPassword );

    //
    const [ copyStatus, setCopyStatus ] = useState("Copy");
    const { pass } = usePassContext();

    function copyPass(){
        navigator.clipboard.writeText(pass);
        setCopyStatus("Copied!");
        setTimeout(()=>{
            setCopyStatus("Copy");
        }, 1000);
    }



    return (
        <div className="container-pass-view">
            <InputGroup size='lg'>
                <Input
                    //pr='4.5rem'
                    //colorScheme='lime'
                    //borderColor='lime'
                    //focusBorderColor='lime'
                    type='text'
                    placeholder='P4$w0Rd'
                    _placeholder={{ opacity: 0.5, color: 'white' }}
                    value={pass}
                    isReadOnly
                />
                <InputRightElement width='4.5rem'>
                    <Button 
                        h='1.75rem'
                        size='sm'
                        colorScheme={copyStatus === "Copy" ? 'gray' : 'teal'}
                        onClick={copyPass}>
                        {copyStatus}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>

    );
}

export { PassView };