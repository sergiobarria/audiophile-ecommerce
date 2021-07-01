import { Switch, Route } from 'react-router-dom';

import {
  HomeScreen,
  HeadphonesScreen,
  SpeakersScreen,
  EarphonesScreen,
  ProductDetailScreen,
  NotFoundScreen,
  CheckoutScreen,
} from '../screens';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/categories/headphones" component={HeadphonesScreen} />
      <Route path="/categories/speakers" component={SpeakersScreen} />
      <Route path="/categories/earphones" component={EarphonesScreen} />
      <Route path="/checkout" component={CheckoutScreen} />
      <Route
        path="/product-detail/:productId"
        component={ProductDetailScreen}
      />
      <Route path="*" component={NotFoundScreen} />
    </Switch>
  );
};

export default Routes;
