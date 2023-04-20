import "@testing-library/jest-dom/extend-expect"

export const mockReplace = jest.fn()

jest.mock("next/navigation", () => {
  return {
    useRouter: function () {
      return {
        replace: mockReplace,
        // replace: (e) => console.log("Hey there", e),
      }
    },
  }
})
