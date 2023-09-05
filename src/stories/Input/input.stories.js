import Input from "./input";

export default {
    title : "Form/Input",
    component : Input,
    argTypes : {
        type : {
            options : ['input','username','password','number'],
            control : {type:'radio'}
        },
        size : {
                options : ['small','medium','large'],
                control : {type : "select"}
         }

    }
}

export function Default(args) {
    return <Input {...args}/>
}

export const InputSmall = () => <Input size='small' placholder='Input text' fullWidth={false}  />
export const InputMedium = () => <Input size='medium' placholder='Input text' fullWidth={false} />
export const InputLarge = () => <Input size='large' placholder='Input text' fullWidth={false}/>
export const InputFullWidth = () => <Input size='large' placholder='Input text'  fullWidth={true}/>

Default.args = {
    placholder : "Default Placholder",
    type : {
        options : ['input','username','password','number'],
        control : {type:'radio'}
    },
    size : {
        options : ['small','medium','large'],
        control : {type : "select"}
    },
    fullWidth : {
        control : {type : "boolean"}
    }
}   

Default.storyName = 'Default Input'

// rename storyname 
// InputSmall.storyName = 'Example Button'
