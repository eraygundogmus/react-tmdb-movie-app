import ReactDOM from "react-dom/client";
import "./base.css";
import { Provider } from "react-redux";
import { store } from "store";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteProvider from "router";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Router>
        <RouteProvider />
      </Router>
    </Provider>
  </QueryClientProvider>
);
