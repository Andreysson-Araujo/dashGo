import { FormControl, FormLabel, Input as CharkraInput, InputProps as ChakraInputProps  } from "@chakra-ui/react";

//Aqui criamos a indeia de como é o imput definido suas interface e suas proprieddes 

interface InputProps extends ChakraInputProps{
    name: string; 
    label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <CharkraInput 
                name={name}
                id={name}
                type="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: "gray.900"
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    );
}