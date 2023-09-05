// import { action } from '@storybook/addon-actions/*';
import { actions } from '@storybook/addon-actions';
import Center from '../Center/center';
import Button from "./Button";

export default {
  title: 'Form/Button',
  component: Button,
  decorators : [story => <Center position='center-center'>{story()}</Center>],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default','primary', 'secondary','success','danger'],
      control: { type: 'select' },
    },
  },
}

export function Default(args) {
    return <Button {...args}></Button>
} 

export const Primary = () =>  <Button backgroundColor variant='primary' size='small' {...actions('onClick','onMouseOver')}>Primary</Button>
export const Secondary = () => <Button variant='secondary' {...actions('onClick','onMouseOver')}>Secondary</Button>
export const Success = () => <Button variant='success' {...actions('onClick','onMouseOver')}>Success</Button>
export const Danger = () => <Button variant='danger' {...actions('onClick','onMouseOver')}>Danger</Button>


Default.args = {
  children : "Default Button",
  variant : {
    options : ['default','primary','secondary','success','danger'],
    control : {type:'radio'}
  },
} 

Default.storyName = 'Default Button'
