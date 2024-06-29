import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductGallery", () => {
  it("should render nothing when array is empty", () => {
    //  const res = render(<ProductImageGallery imageUrls={[]}/>)
    //   expect(res.container).toBeEmptyDOMElement();
    //OR
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("should render nothing when array is empty", () => {
    render(<ProductImageGallery imageUrls={[]} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
//   it("should render list of images when array is not empty", () => {
//     const imageUrls = ["url1.jpg", "url2.jpg"];
//     render(<ProductImageGallery imageUrls={imageUrls} />);
//     const images = screen.getAllByRole("img");
//     expect(images.length).toBe(imageUrls.length);
//   });
it("should render list of images when array is not empty", () => {
    const imageUrls = ["url1.jpg", "url2.jpg"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
   
    imageUrls.forEach ((url, index)=>{
        expect(images[index]).toHaveAttribute('src',url);
    })
  });
});
