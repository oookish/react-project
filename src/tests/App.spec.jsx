// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import App from "../App";

// jest.mock("./Home", () => ({ Home: () => <div>Home content</div> }));
// jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));
// jest.mock("./Registration", () => ({
//   Registration: () => <div>Registration content</div>,
// }));
// jest.mock("./Profile", () => ({ Profile: () => <div>Profile content</div> }));

// describe("App", () => {
//   it("renders correctly", () => {
//     const { container } = render(<App />);
//     expect(container.innerHTML).toMatch("Home content");
//   });

//   describe("when clicked on navigation buttons", () => {
//     it("open the corresponding page", () => {
//       const { getByText, container } = render(<App />);

//       fireEvent.click(getByText("Registration"));
//       expect(container.innerHTML).toMatch("Registration content");
//       fireEvent.click(getByText("Map"));
//       expect(container.innerHTML).toMatch("Map content");
//       fireEvent.click(getByText("Profile"));
//       expect(container.innerHTML).toMatch("Profile content");
//     });
//   });
// });
