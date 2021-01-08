import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type TBottomTabsParamList = {
    HomeScreen: undefined;
    InfoScreen: undefined;
}

export type TBottomTabsProps = BottomTabScreenProps<TBottomTabsParamList>;