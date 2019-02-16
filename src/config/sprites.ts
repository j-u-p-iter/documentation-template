import path from 'path';
import { curry } from 'ramda';

const pathToMaterialDesignIcons = path.resolve('material-design-icons');
const createFileInfo = curry((basePath: string, prefix: string, pathToConcreteIcon: string, iconName: string): string => path.join(basePath, `${pathToConcreteIcon}#${prefix}-${iconName}`));

const createMaterialDesignIconInfo = createFileInfo(pathToMaterialDesignIcons, 'md'); 

interface SpritesConfig {
  [iconCategory: string]: string[];
}

export const sprites: SpritesConfig = {
  materialDesign: [
    createMaterialDesignIconInfo('/action/svg/production/ic_check_circle_24px.svg', 'success'),
  ],
};
