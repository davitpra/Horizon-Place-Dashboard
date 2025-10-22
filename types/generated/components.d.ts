import type { Schema, Struct } from '@strapi/strapi';

export interface MealsBreakfast extends Struct.ComponentSchema {
  collectionName: 'components_meals_breakfasts';
  info: {
    description: '';
    displayName: 'Breakfast';
    icon: 'book';
  };
  attributes: {
    additionals: Schema.Attribute.Text;
    Cereals: Schema.Attribute.Enumeration<
      ['Bran Flakes', 'Corn Flakes', 'Rice Crispy', 'Oatmeal', 'none']
    >;
    Comment: Schema.Attribute.Text;
    eggs: Schema.Attribute.Enumeration<
      ['over easy', 'scramble', 'pouched', 'boiled', 'none']
    >;
    FruitPlate: Schema.Attribute.Boolean;
    Hotdrink: Schema.Attribute.Enumeration<['Coffee', 'Tea', 'none']>;
    Juice: Schema.Attribute.Enumeration<
      ['Tomato', 'Orange', 'Cramberry', 'Apple', 'none']
    >;
    Milk: Schema.Attribute.Enumeration<['none', 'regular', 'lactose free']>;
    Muffing: Schema.Attribute.Boolean;
    onTray: Schema.Attribute.Boolean;
    toast: Schema.Attribute.Enumeration<
      ['brown', 'white', 'raisen', 'rye', 'none']
    >;
    water: Schema.Attribute.Enumeration<['with ice', 'no ice', 'none']>;
    went_out_to_eat: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    Yogurt: Schema.Attribute.Boolean;
  };
}

export interface MealsBreakfastEspecial extends Struct.ComponentSchema {
  collectionName: 'components_meals_breakfast_especials';
  info: {
    displayName: 'Breakfast-especial';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface MealsDinner extends Struct.ComponentSchema {
  collectionName: 'components_meals_dinners';
  info: {
    description: '';
    displayName: 'Supper';
    icon: 'arrowDown';
  };
  attributes: {
    dessert: Schema.Attribute.String;
    option_1: Schema.Attribute.String;
    option_2: Schema.Attribute.String;
    side_1: Schema.Attribute.String;
    side_2: Schema.Attribute.String;
    side_3: Schema.Attribute.String;
    side_4: Schema.Attribute.String;
  };
}

export interface MealsLunch extends Struct.ComponentSchema {
  collectionName: 'components_meals_lunches';
  info: {
    description: '';
    displayName: 'Lunch';
    icon: 'arrowDown';
  };
  attributes: {
    dessert: Schema.Attribute.String;
    option_1: Schema.Attribute.String;
    option_2: Schema.Attribute.String;
    salad: Schema.Attribute.String;
    soup: Schema.Attribute.String;
  };
}

export interface StaplesDrinks extends Struct.ComponentSchema {
  collectionName: 'components_staples_drinks';
  info: {
    description: '';
    displayName: 'Drinks';
    icon: 'cup';
  };
  attributes: {
    Hotdrink: Schema.Attribute.Enumeration<['Coffee', 'Tea', 'none']>;
    Juice: Schema.Attribute.Enumeration<
      ['Tomato', 'Orange', 'Cramberry', 'Apple', 'none']
    >;
    Milk: Schema.Attribute.Enumeration<['none', 'regular ', 'lactose free']>;
    water: Schema.Attribute.Enumeration<['with ice', 'no ice', 'none']> &
      Schema.Attribute.DefaultTo<'with ice'>;
  };
}

export interface StaplesPreferences extends Struct.ComponentSchema {
  collectionName: 'components_staples_preferences';
  info: {
    description: '';
    displayName: 'preferences';
    icon: 'archive';
  };
  attributes: {
    additionals: Schema.Attribute.Text;
    Comment: Schema.Attribute.Text;
    Hotdrink: Schema.Attribute.Enumeration<['Coffee', 'Tea', 'none']>;
    Juice: Schema.Attribute.Enumeration<
      ['Tomato', 'Orange', 'Cramberry', 'Apple', 'none']
    >;
    Milk: Schema.Attribute.Enumeration<['none', 'regular', 'lactose free']>;
    onTray: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    water: Schema.Attribute.Enumeration<['with ice', 'no ice', 'none']>;
    went_out_to_eat: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meals.breakfast': MealsBreakfast;
      'meals.breakfast-especial': MealsBreakfastEspecial;
      'meals.dinner': MealsDinner;
      'meals.lunch': MealsLunch;
      'staples.drinks': StaplesDrinks;
      'staples.preferences': StaplesPreferences;
    }
  }
}
