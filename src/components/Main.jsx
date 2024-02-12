import home from "../img/home-image.png";
import burger1 from "../img/burger-1.png";
import snack1 from "../img/snack-1.png";
import beverage2 from "../img/beverage-2.png";
import promo1 from "../img/promo-1.png";
import promo2 from "../img/promo-2.png";
const Main = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col items-center gap-10 md:flex-row">
          <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
            <img src={home} alt="home image" className="w-60 md:w-full" />
          </div>
          <div className="text-center md:basis-1/2 md:text-start lg:sasis-3/5">
            <h1 className="text-4xl font-oswald fond-bold uppercase lg:text-6xl">
              HAPPY TUMMY TASTY BURGERS.
            </h1>
            <div className="w-28 h-[2px] bg-secondaryColor my-5 mx-auto md:mx-0"></div>
            <p className="text-paragraphColor text-xs leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              voluptates eveniet labore, eos iure nemo asperiores iusto aliquam
              obcaecati quae molestiae tenetur. Facilis, nulla cum!
            </p>
            <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
              <div className="text-center">
                <i class="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                <br />
                Delicious
              </div>
              <div className="text-center">
                <i class="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
                <br />
                Fresh
              </div>
              <div className="text-center">
                <i class="fa-brands fa-envira text-secondaryColor text-4xl"></i>
                <br />
                Organic
              </div>
            </div>
            <a
              href="#"
              className="bg-secondaryColor text-black font-medium inline-block text-sm py-3 px-8 capitalize text-center cursor-pointer rounded-md ease-linear dutation-200 hover:bg-red-400 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Categoria */}
      <section>
        <div className="container flex flex-col gap-5 md:flex-row">
          {/* card 1 */}
          <div className=" bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <img
                src={burger1}
                alt="category image"
                className=" absolute w-28 -bottom-4 -left-4 "
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="text-xl font-bold uppercase md:text-4xl lg:text-6xl">
                  Food
                </h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" className="text-blackColor cursor-pointer">
                Buy online
              </a>
            </div>
          </div>
          {/* card 2 */}
          <div className=" bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <img
                src={snack1}
                alt="category image"
                className=" absolute w-28 -bottom-4 -left-4"
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="text-xl font-bold uppercase md:text-4xl lg:text-6xl">
                  Snack
                </h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" className="text-secondaryColor cursor-pointer">
                Buy online
              </a>
            </div>
          </div>
          {/* card 3 */}
          <div className=" bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <img
                src={beverage2}
                alt="category image"
                className=" absolute w-28 -bottom-4 -left-4"
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="text-xl font-bold uppercase md:text-4xl lg:text-6xl">
                Beverage
                </h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" className="text-secondaryColor cursor-pointer">
                Buy online
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Promo */}
      <section>
        <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
          {/* card 1 */}
          <div className=" bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
            <img src={promo1} alt="promo image" className="w-40 mx-auto animate-movingY  md:mx-5" />
            <div className="space-y-2 pt-5">
              <p className="text-xs text-secondaryColor">Payday promo</p>
              <h3 className="text-xl font-oswald uppercase lg:text-2xl">
                GET A 10% DISCOUNT ON PAYDAY WEEK
              </h3>
              <p className="text-paragraphColor text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <a href="#" className="text-xs text-secondaryColor">
                Buy online
              </a>
            </div>
          </div>
          {/* card 2 */}
          <div className=" bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
            <img src={promo2} alt="promo image" className="w-40 mx-auto animate-movingY  md:mx-5" />
            <div className="space-y-2 pt-5">
              <p className="text-xs text-secondaryColor">Payday promo</p>
              <h3 className="text-xl font-oswald uppercase lg:text-2xl">
                GET A 10% DISCOUNT ON PAYDAY WEEK
              </h3>
              <p className="text-paragraphColor text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <a href="#" className="text-xs text-secondaryColor">
                Buy online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
