import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    
  } from 'react';
  import { TextInputProps } from 'react-native';
  import { useField } from '@unform/core';
  
  import { Container,  Icon,TextInput } from './styles';
  
  interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    sendData: Function;
    containerStyle?: object;
  }
  
  interface InputValueReference {
    value: string;
  }
  
  interface InputRef {
    focus(): void;
  }
  
  const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon,sendData, containerStyle = {}, ...rest },
    ref, 
  ) => {
    const [iconI,setIconI] =useState(icon)
    const [seePassword,setSeePassword] = useState(false)
    const inputElementRef = useRef<any>(null);
  
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);
  
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
  
      setIsFilled(!!inputValueRef.current.value);
    }, []);
  
    useEffect(() => {
      inputValueRef.current.value = defaultValue;
    }, [defaultValue]);
  
    useImperativeHandle(ref, () => ({
      focus() {
        inputElementRef.current.focus();
      },
    }));
  
    useEffect(() => {
      registerField<string>({
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value: string) {
          inputValueRef.current.value = value;
          inputElementRef.current.setNativeProps({ text: value });
        },
        clearValue(ref: any) {
          inputValueRef.current.value = '';
          inputElementRef.current.clear();
        },
      });
    }, [fieldName, registerField]);
    const alterPassIcon = useCallback(async()=>
      {
       
        if(icon=="eye-outline") {
          
          if(seePassword==true){
            icon='eye-off-outline'
            await setIconI('eye-off-outline')
        

          }
          
        }
        if(icon=="eye-off-outline") {
          if (seePassword==false){
            icon="eye-outline"
          
            await setIconI("eye-outline")
          } 
        }
     
      },[])
      
    return (
      <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
     
  
        <TextInput
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#000"
         
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value: string) => {
            inputValueRef.current.value = value;
          }}
         

          {...rest}
        />
        <Icon
          onPress={()=>{
            async function alterar(){
                if(iconI=="eye-outline"){
                  await setSeePassword(true)
                  setIconI('eye-off-outline')
                  sendData(true)
                }else if(iconI=="eye-off-outline"){
                  await setSeePassword(false)
                  await setIconI("eye-outline")
                  sendData(false)
                }
              
          
            }
            alterar()


          }}
          name={iconI}
          size={20}
          color={isFocused || isFilled ? '#ff9000' : '#666360'}
        />
      </Container>
    );
  };
  
  export default forwardRef(Input);