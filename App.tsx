import React from 'react';
import {PaperProvider} from 'react-native-paper';

import AppNavigator from './src/navigation/AppNavigator';
import {appTheme} from './src/theme/theme';

function App() {
  return (
    <PaperProvider theme={appTheme}>
      <AppNavigator />
    </PaperProvider>
  );
}

export default App;