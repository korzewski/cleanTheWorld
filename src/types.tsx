import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type TStackNavigationParamList = {

}

type TBottomTabsParamList = {
    HomeScreen: undefined;
    InfoScreen: undefined;
}

export type TScreenProps = StackScreenProps<TStackNavigationParamList>;
export type TBottomTabsProps = BottomTabScreenProps<TBottomTabsParamList>;