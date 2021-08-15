import { Stack, DefaultButton, IStackTokens } from "@fluentui/react"

export interface IButtonProps {
    disabled?: boolean;
  checked?: boolean;
  backGroundColor : string;
  text : string; 
  allowDisabledFocus: boolean;
}

const stackTokens: IStackTokens = { childrenGap: 40 };

export const MyButton : React.FC<IButtonProps> = (props) => {
    const { disabled, checked, backGroundColor, text, allowDisabledFocus } = props;
    return (
        <Stack horizontal tokens={stackTokens}>
      <DefaultButton text={text} style={{backgroundColor : backGroundColor }} onClick={_alertClicked} allowDisabledFocus={allowDisabledFocus} disabled={disabled} checked={checked} />
    </Stack>
    )
}
function _alertClicked(): void {
    alert('Clicked');
  }