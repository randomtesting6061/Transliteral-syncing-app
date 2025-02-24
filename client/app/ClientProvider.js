"use client";  // ✅ Mark as a Client Component

import { Provider } from "react-redux";
import store from "../store/store";  // ✅ Ensure correct path

export default function ClientProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
