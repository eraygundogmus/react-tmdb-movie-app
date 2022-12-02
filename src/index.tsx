import ReactDOM from "react-dom/client";
import "./base.css";
import { Provider } from "react-redux";
import { store } from "store";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteProvider from "router";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const queryClient = new QueryClient();
let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <RouteProvider />
        </Router>{" "}
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
