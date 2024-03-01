
import { Menu } from "semantic-ui-react";
export default function Gnb(){
    const activeItem = "home";
    return (
        <Menu inverted>
          <Menu.Item name="home" active={activeItem === "home"} />
          <Menu.Item
            name="about"
            active={activeItem === "home"}
            //onClick={goLink}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "home"}
            //onClick={goLink}
          />
          <Menu.Item
            name="about"
            active={activeItem === "home"}
            //onClick={goLink}
          />
        </Menu>
      );
    }