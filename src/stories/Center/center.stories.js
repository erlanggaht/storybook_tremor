import Button from "../Button/Button";
import Center from "./center";

export default {
    title : 'Center',
    component : Center,
}

export const CenterTop = () => <Center position='center-top'><Button>Center-Top</Button></Center> 
export const CenterCenter = () => <Center position='center-center'><Button>Center-Center</Button></Center> 
export const CenterBottom = () => <Center position='center-bottom'><Button>Center-Bottom</Button></Center> 