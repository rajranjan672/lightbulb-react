import "../components/product.css"
import Desc from "../components/DescHeader"
import ProductDesc from "../components/ProductDesc";
import Carousel from "../components/imageCarousel";
export default function Product() {
  return (
    <div>
      <Desc />
      <ProductDesc
        productHeading="A plarform for token gated scheduled booking"
        productDescription="Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes the way one wakes up. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at gravida sed nibh ac. Viverra in non lacus etiam. Euismod mauris odio . Nibh at ut eros, nunc enim. Tellus tincidunt vitae magna vestibulum morbi quam mauris. Mauris, in proin aliquam nulla. Velit sociis lorem porttitor sed pharetra maecenas.

Faucibus non laoreet nec eu eu lacus eget. Orci, amet viverra dignissim venenatis libero. Arcu, varius arcu eget mauris, dignissim enim bibendum ornare. Diam tellus ultrices tempor vestibulum vitae, varius massa. Nunc mattis magna morbi nunc, egestas pellentesque.

 Commodo, consectetur pellentesque enim fringilla convallis pellentesque ac. Elit est cursus convallis felis, blandit aliquam. Tristique amet, semper penatibus "
      />
      <Carousel style={{ marginLeft: "100px" }} />
    </div>
  );
}
