import { useState } from "react";
const LayoutContainer = ({ children, style }) => <div style={style} className="nexus-layout-container">
    {children}
  </div>;
const Container = ({ children, style }) => <div style={style} className="nexus-container">
    {children}
  </div>;
const Header = ({ text, style, binding, appData }) => {
  const value = binding && appData ? appData[binding] : "";
  return <h1 style={{ margin: 0, ...style }} className="nexus-header">{text || ""}{value}</h1>;
};
const Text = ({ text, style }) => <p style={{ margin: 0, ...style }} className="nexus-text">{text}</p>;
const Input = ({ placeholder, binding, style, setVariable, appData }) => {
  return <input
    type="text"
    placeholder={placeholder}
    style={style}
    value={binding && appData && appData[binding] || ""}
    onChange={(e) => setVariable && binding && setVariable(binding, e.target.value)}
    className="nexus-input px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
  />;
};
const Button = ({ text, style, action, executeAction }) => {
  return <button
    style={style}
    onClick={() => action && executeAction && executeAction(action)}
    className="nexus-button transition hover:opacity-80 disabled:opacity-50"
  >
      {text}
    </button>;
};
const Card = ({ children, style }) => <div style={style} className="nexus-card">
    {children}
  </div>;
const COMPONENT_REGISTRY = {
  layout_container: LayoutContainer,
  container: Container,
  header: Header,
  text: Text,
  input: Input,
  button: Button,
  card: Card
};
const shouldRender = (node, appData) => {
  if (!node.condition) return true;
  const { variable, operator, value } = node.condition;
  const actualValue = appData[variable];
  switch (operator) {
    case "equals":
      return actualValue === value;
    case "not_empty":
      return actualValue && actualValue.length > 0;
    default:
      return true;
  }
};
const RenderNode = ({ node, appData, setVariable, executeAction }) => {
  if (!shouldRender(node, appData)) return null;
  const Component = COMPONENT_REGISTRY[node.type];
  if (!Component) {
    console.warn(`Unknown component type: ${node.type}`);
    return null;
  }
  return <Component
    {...node}
    appData={appData}
    setVariable={setVariable}
    executeAction={executeAction}
  >
      {node.children?.map((child) => <RenderNode
    key={child.id}
    node={child}
    appData={appData}
    setVariable={setVariable}
    executeAction={executeAction}
  />)}
    </Component>;
};
function NexusCrmShowcase() {
  const [appData, setAppData] = useState({
    searchQuery: "",
    selectedUser: ""
  });
  const setVariable = (key, value) => {
    setAppData((prev) => ({ ...prev, [key]: value }));
  };
  const executeAction = (action) => {
    if (!action) return;
    switch (action.type) {
      case "set_variable":
        setVariable(action.key, action.value);
        break;
      case "alert":
        alert(action.payload);
        break;
      default:
        console.warn("Unknown action", action);
    }
  };
  const crmSchema = {
    "appName": "Nexus CRM",
    "version": "2.0.1",
    "uiSchema": [
      {
        "id": "root-layout",
        "type": "layout_container",
        "style": { "display": "flex", "height": "100%", "backgroundColor": "#f8fafc", "width": "100%", "overflow": "hidden" },
        "children": [
          {
            "id": "sidebar",
            "type": "container",
            "style": { "width": "260px", "backgroundColor": "#1e293b", "padding": "20px", "flexShrink": 0, "display": "flex", "flexDirection": "column" },
            "children": [
              { "id": "logo", "type": "header", "text": "NEXUS", "style": { "color": "#6366f1", "fontSize": "20px", "marginBottom": "40px", "fontWeight": "bold", "letterSpacing": "2px" } },
              { "id": "nav-1", "type": "button", "text": "Dashboard", "style": { "width": "100%", "textAlign": "left", "backgroundColor": "transparent", "color": "#fff", "marginBottom": "10px", "padding": "10px", "borderRadius": "6px", "border": "none", "cursor": "pointer" } },
              { "id": "nav-2", "type": "button", "text": "Customers", "style": { "width": "100%", "textAlign": "left", "backgroundColor": "#334155", "color": "#fff", "padding": "10px", "borderRadius": "6px", "border": "none", "cursor": "pointer" } }
            ]
          },
          {
            "id": "main-content",
            "type": "container",
            "style": { "flex": "1", "padding": "40px", "overflowY": "auto" },
            "children": [
              {
                "id": "header-row",
                "type": "container",
                "style": { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "30px" },
                "children": [
                  { "id": "page-title", "type": "header", "text": "Customer Overview", "style": { "fontSize": "28px", "color": "#0f172a", "fontWeight": "600", "margin": 0 } },
                  {
                    "id": "search-bar",
                    "type": "input",
                    "placeholder": "Search customers... (Try 'Admin')",
                    "binding": "searchQuery",
                    "style": { "width": "300px", "borderRadius": "8px" }
                  }
                ]
              },
              {
                "id": "stats-grid",
                "type": "container",
                "style": { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "20px", "marginBottom": "40px" },
                "children": [
                  {
                    "id": "stat-1",
                    "type": "card",
                    "style": { "padding": "20px", "backgroundColor": "#fff", "borderRadius": "12px", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
                    "children": [
                      { "id": "s1-label", "type": "text", "text": "Total Revenue", "style": { "color": "#64748b", "fontSize": "14px", "margin": 0, "fontWeight": "500" } },
                      { "id": "s1-val", "type": "header", "text": "$428,190", "style": { "fontSize": "30px", "marginTop": "8px", "margin": 0, "fontWeight": "700", "color": "#0f172a" } }
                    ]
                  },
                  {
                    "id": "stat-2",
                    "type": "card",
                    "style": { "padding": "20px", "backgroundColor": "#fff", "borderRadius": "12px", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
                    "children": [
                      { "id": "s2-label", "type": "text", "text": "Active Users", "style": { "color": "#64748b", "fontSize": "14px", "margin": 0, "fontWeight": "500" } },
                      { "id": "s2-val", "type": "header", "text": "2,840", "style": { "fontSize": "30px", "marginTop": "8px", "margin": 0, "fontWeight": "700", "color": "#0f172a" } }
                    ]
                  }
                ]
              },
              {
                "id": "conditional-alert",
                "type": "container",
                "condition": { "variable": "searchQuery", "operator": "equals", "value": "Admin" },
                "style": { "padding": "15px", "backgroundColor": "#fef2f2", "border": "1px solid #fee2e2", "borderRadius": "8px", "marginBottom": "20px" },
                "children": [
                  { "id": "alert-text", "type": "text", "text": "\u26A0\uFE0F Warning: You are in Administrative Search Mode.", "style": { "color": "#991b1b", "fontWeight": "bold", "margin": 0 } }
                ]
              },
              {
                "id": "data-table-sim",
                "type": "container",
                "style": { "backgroundColor": "#fff", "borderRadius": "12px", "padding": "0px", "overflow": "hidden", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", "border": "1px solid #e2e8f0" },
                "children": [
                  { "id": "row-1", "type": "button", "text": "View Contact: Jane Cooper", "action": { "type": "set_variable", "key": "selectedUser", "value": "Jane Cooper" }, "style": { "width": "100%", "padding": "15px 20px", "textAlign": "left", "borderBottom": "1px solid #f1f5f9", "backgroundColor": "transparent", "fontWeight": "500", "color": "#0f172a", "border": "none", "cursor": "pointer" } },
                  { "id": "row-2", "type": "button", "text": "View Contact: Cody Fisher", "action": { "type": "set_variable", "key": "selectedUser", "value": "Cody Fisher" }, "style": { "width": "100%", "padding": "15px 20px", "textAlign": "left", "backgroundColor": "transparent", "fontWeight": "500", "color": "#0f172a", "border": "none", "cursor": "pointer" } }
                ]
              }
            ]
          },
          {
            "id": "inspector-panel",
            "type": "container",
            "condition": { "variable": "selectedUser", "operator": "not_empty" },
            "style": { "width": "320px", "backgroundColor": "#fff", "borderLeft": "1px solid #e2e8f0", "padding": "30px", "flexShrink": 0, "boxShadow": "-4px 0 15px -3px rgb(0 0 0 / 0.05)" },
            "children": [
              { "id": "ins-title", "type": "header", "text": "User Details", "style": { "fontSize": "18px", "marginBottom": "24px", "fontWeight": "600", "color": "#0f172a" } },
              { "id": "ins-name-label", "type": "text", "text": "Full Name", "style": { "fontSize": "12px", "color": "#64748b", "textTransform": "uppercase", "fontWeight": "bold", "letterSpacing": "0.05em", "marginBottom": "8px", "display": "block" } },
              { "id": "ins-name-val", "type": "header", "binding": "selectedUser", "style": { "fontSize": "24px", "marginBottom": "30px", "color": "#0f172a", "fontWeight": "600" } },
              {
                "id": "close-btn",
                "type": "button",
                "text": "Close Panel",
                "action": { "type": "set_variable", "key": "selectedUser", "value": "" },
                "style": { "backgroundColor": "#ef4444", "color": "#fff", "width": "100%", "padding": "10px", "borderRadius": "8px", "fontWeight": "500", "border": "none", "cursor": "pointer" }
              }
            ]
          }
        ]
      }
    ]
  };
  return <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="flex-1 overflow-hidden relative">
        {crmSchema.uiSchema.map((node) => <RenderNode
    key={node.id}
    node={node}
    appData={appData}
    setVariable={setVariable}
    executeAction={executeAction}
  />)}
      </div>
      <div className="p-4 bg-slate-900 text-slate-300 text-xs font-mono shrink-0 overflow-y-auto max-h-48 border-t border-slate-700">
        <div className="text-slate-500 mb-2 font-bold uppercase tracking-widest text-[10px]">App Engine Memory State</div>
        <pre>{JSON.stringify(appData, null, 2)}</pre>
      </div>
    </div>;
}
export {
  NexusCrmShowcase as default
};
