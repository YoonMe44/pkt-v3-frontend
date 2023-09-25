import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative">
      <div className="py-4 lg:py-12 lg:px-12 w-full grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 ">
        <div className="">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/pkt.png"}
              alt="pktlogo"
              width={100}
              height={100}
              className="mb-5"
            />
            <p className="w-80 lg:w-full text-center px-20 text-zinc-700 lg:text-sm text-[10px] ">
              PKT Education Center is now teaching Japanese language and
              technology for the future and achieving a successful life goal...
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-2xl font-medium text-red-600 mb-[38px]">Information For</h1>
          <div className="flex justify-start gap-20">
            <div className="flex flex-col">
              <a
                href="#"
                className="text-zinc-700  hover:text-zinc-500 text-sm mb-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-zinc-700 hover:text-zinc-500  text-sm mb-1"
              >
                About us
              </a>
              <a
                href="#"
                className="text-zinc-700 hover:text-zinc-500  text-sm mb-1"
              >
                Local Classroom
              </a>
              <a
                href="#"
                className="text-zinc-700 hover:text-zinc-500  text-sm mb-1"
              >
                Online Classroom
              </a>
              <a
                href="#"
                className="text-zinc-700 hover:text-zinc-500  text-sm mb-1"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="#"
                className="text-zinc-700 hover:text-zinc-500  text-sm mb-1"
              >
                News
              </a>
              <a href="#" className="text-zinc-700 hover:text-zinc-500  text-sm">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-full">
            <h1 className="text-2xl font-medium text-red-600 mb-[38px]">
              Address
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path
                  d="M 49.270 212.819 C 42.305 243.050, 40.971 263.267, 44.077 291.500 C 45.864 307.747, 50.886 334.326, 54.468 346.500 C 55.277 349.250, 57.518 356.915, 59.449 363.533 C 61.379 370.152, 64.794 380.052, 67.038 385.533 C 69.281 391.015, 76.731 410.125, 83.593 428 C 107.775 490.994, 112.843 503.083, 124.890 526.500 C 150.687 576.645, 190.066 630.917, 241.346 687 C 250.147 696.625, 272.007 719.149, 289.924 737.054 C 379.686 826.756, 453.791 881.510, 533.500 917.023 C 553.961 926.139, 584.495 937.979, 625.500 952.695 C 647.112 960.452, 650.020 961.388, 675 968.621 C 715.075 980.226, 722.573 981.435, 754 981.363 C 782.380 981.297, 804.299 977.979, 829.439 969.942 C 884.808 952.241, 944.568 911.686, 959.762 881.500 C 965.490 870.120, 974.170 838.356, 978.480 813 C 980.263 802.511, 981.659 774.764, 980.614 770.598 C 980.248 769.142, 978.296 766.120, 976.276 763.883 C 972.602 759.817, 961.028 751, 959.364 751 C 958.879 751, 957.136 753.233, 955.491 755.962 C 942.844 776.945, 908.612 803.210, 867.500 823.475 C 808.029 852.790, 755.148 858.858, 692 843.612 C 673.428 839.128, 650.893 832.118, 635.500 826.037 C 627.250 822.777, 604.491 814.065, 584.925 806.676 C 543.685 791.102, 527.605 784.276, 501.896 771.431 C 479.220 760.102, 470.871 755.245, 446.798 739.377 C 344.764 672.123, 225.322 552.435, 156.520 448.500 C 125.221 401.218, 108.509 366.518, 83.318 296.500 C 79.756 286.600, 73.550 270.393, 69.528 260.485 C 62.680 243.615, 53.087 213.700, 52.930 208.721 C 52.726 202.287, 51.338 203.841, 49.270 212.819"
                  stroke="none"
                  fill="#c33c2c"
                  fill-rule="evenodd"
                />
                <path
                  d="M 219 43.045 C 202.019 44.147, 175.359 49.899, 154.685 56.923 C 134.234 63.870, 111.728 86.282, 89.836 121.500 C 67.237 157.857, 50.912 195.231, 52.567 206.826 C 53.879 216.010, 62.337 242.772, 69.528 260.485 C 73.550 270.393, 79.756 286.600, 83.318 296.500 C 108.509 366.518, 125.221 401.218, 156.520 448.500 C 225.322 552.435, 344.764 672.123, 446.798 739.377 C 470.871 755.245, 479.220 760.102, 501.896 771.431 C 527.605 784.276, 543.685 791.102, 584.925 806.676 C 604.491 814.065, 627.250 822.777, 635.500 826.037 C 650.893 832.118, 673.428 839.128, 692 843.612 C 755.148 858.858, 808.029 852.790, 867.500 823.475 C 901.352 806.788, 929.874 786.677, 946.454 767.802 C 952.143 761.326, 958 752.888, 958 751.169 C 958 750.709, 952.263 746.939, 945.250 742.791 C 938.237 738.643, 923.500 729.933, 912.500 723.437 C 901.500 716.940, 885.115 708.123, 876.088 703.844 C 867.062 699.565, 854.462 692.972, 848.088 689.192 C 841.715 685.413, 833.800 680.808, 830.500 678.960 C 820.266 673.230, 810.734 666.906, 805 662.043 C 801.975 659.478, 794.550 654.732, 788.500 651.497 C 765.713 639.312, 767.508 640, 758.537 640 C 744.690 640, 735.607 644.400, 721.600 657.891 C 712.923 666.248, 688.634 695.163, 677.280 710.651 C 668.493 722.638, 653.450 739.333, 644.330 747.219 C 631.332 758.458, 620.311 761.354, 608.209 756.711 C 604.519 755.296, 598.072 752.943, 593.882 751.483 C 589.692 750.023, 581.367 745.714, 575.382 741.906 C 569.397 738.099, 560.225 732.456, 555 729.365 C 460.914 673.718, 400.351 621.626, 348.792 552 C 328.738 524.919, 308.485 493.179, 279.241 443 C 270.502 428.007, 264 411.990, 264 405.458 C 264 396.137, 271.972 382.262, 284.223 370.263 C 292.358 362.294, 319.667 340.321, 330.669 332.890 C 352.177 318.364, 372.242 297.217, 381.243 279.588 C 383.901 274.383, 384.337 272.483, 384.246 266.489 C 384.097 256.609, 380.825 248.423, 371.821 235.399 C 367.677 229.405, 363.097 222.154, 361.645 219.287 C 360.192 216.420, 357.695 212.583, 356.096 210.762 C 354.496 208.940, 347.471 196.886, 340.484 183.975 C 333.497 171.064, 327.432 160.050, 327.006 159.500 C 326.580 158.950, 322.745 151.975, 318.483 144 C 314.221 136.025, 307.252 123.650, 302.996 116.500 C 298.739 109.350, 291.292 96.300, 286.446 87.500 C 273.146 63.347, 265.482 51.933, 258.088 45.265 L 254.500 42.030 242.500 42.164 C 235.900 42.238, 225.325 42.635, 219 43.045 M 44.160 298.035 C 43.991 301.780, 47.341 321.437, 49.012 326.500 C 49.990 329.463, 49.995 329.457, 49.450 326 C 49.147 324.075, 48.047 317.775, 47.007 312 C 45.967 306.225, 44.936 299.925, 44.718 298 L 44.320 294.500 44.160 298.035 M 85.491 435 C 88.449 444.993, 104.923 486.410, 105.651 485.682 C 105.871 485.463, 105.098 483.082, 103.935 480.392 C 102.771 477.701, 98.241 466.069, 93.868 454.541 C 86.737 435.746, 83.427 428.025, 85.491 435 M 241.078 687.481 C 246.008 693.254, 270.201 720.080, 278.823 729.334 C 302.550 754.799, 352.662 799.687, 385.500 824.891 L 387.500 826.426 385.500 824.388 C 384.400 823.268, 378.131 817.884, 371.568 812.425 C 338.378 784.816, 287.921 736.726, 249.392 695.981 C 243.402 689.646, 239.660 685.821, 241.078 687.481 M 980.823 788 C 980.450 796.525, 979.635 806.116, 979.010 809.313 C 978.386 812.510, 978.058 815.660, 978.282 816.313 C 979.332 819.382, 982.103 793.638, 981.814 783.500 L 981.500 772.500 980.823 788 M 975.143 829.643 C 974.514 832.773, 974.186 835.519, 974.413 835.746 C 974.640 835.973, 975.354 833.612, 976 830.500 C 976.646 827.388, 976.975 824.641, 976.730 824.397 C 976.486 824.152, 975.771 826.513, 975.143 829.643 M 656.087 963.379 C 657.603 965.001, 681.178 972.819, 686.500 973.465 C 689.800 973.865, 692.275 973.970, 692 973.698 C 691.725 973.426, 684.300 971.115, 675.500 968.563 C 666.700 966.011, 658.600 963.660, 657.500 963.337 C 656.400 963.015, 655.764 963.034, 656.087 963.379 M 717 980.465 C 719.276 981.365, 724.345 981.825, 731.500 981.781 L 742.500 981.715 733 980.947 C 727.775 980.524, 721.250 979.932, 718.500 979.630 L 713.500 979.083 717 980.465"
                  stroke="none"
                  fill="#e34b3b"
                  fill-rule="evenodd"
                />
              </svg>
              <a
                href="#"
                className="mb-1 ml-4 text-zinc-700 text-sm "
              >
                +959 251801804, +959 251801805
              </a>
            </div>
            <div className="flex mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 800 800"
                version="1.1"
              >
                <path
                  d="M 395.500 45.107 C 366.070 48.641, 333.477 59.158, 308.676 73.123 C 241.731 110.818, 197.778 177.698, 189.913 253.836 C 188.258 269.857, 189.231 299.341, 191.914 314.500 C 203.562 380.293, 248.642 480.227, 322.279 603.500 C 351.452 652.336, 418.477 755.801, 421.533 756.713 C 422.649 757.047, 445.697 722.740, 469.712 685 C 554.267 552.121, 612.544 440.643, 639.089 361 C 654.878 313.629, 658.354 278.821, 651.423 237.500 C 639.249 164.917, 591.172 100.679, 524.500 67.911 C 502.480 57.088, 481.101 50.231, 457.420 46.395 C 445.583 44.478, 407.359 43.683, 395.500 45.107 M 410.651 153.089 C 381.502 155.589, 353.532 169.113, 332.949 190.659 C 312.247 212.329, 301.120 238.600, 299.341 270 C 298.317 288.069, 302.492 309.229, 310.535 326.739 C 319.209 345.623, 337.006 366.233, 354.399 377.537 C 403.655 409.547, 467.655 402.719, 509.042 361.037 C 531.979 337.937, 543.988 308.304, 543.997 274.785 C 544.003 249.253, 537.609 228.120, 523.436 206.830 C 498.653 169.603, 455.859 149.212, 410.651 153.089"
                  stroke="none"
                  fill="#d63930"
                  fill-rule="evenodd"
                />
              </svg>
              <a
                href="#"
                className="w-full pr-24 ml-4 text-zinc-700 text-sm"
              >
                No(71), Room A, Ground Floor, Upper Pazundaung Road Mingalar
                Taung Nyunt Township,Yangon.
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* for sp */}

      <div className=" my-4 grid grid-rows-1 grid-cols-2  ">
        <div className="pl-6 md:pl-20 w-full lg:hidden">
          <h1 className="text-[12px] md:text-lg text-start font-medium text-red-600 mb-4">
            Address
          </h1>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path
                d="M 49.270 212.819 C 42.305 243.050, 40.971 263.267, 44.077 291.500 C 45.864 307.747, 50.886 334.326, 54.468 346.500 C 55.277 349.250, 57.518 356.915, 59.449 363.533 C 61.379 370.152, 64.794 380.052, 67.038 385.533 C 69.281 391.015, 76.731 410.125, 83.593 428 C 107.775 490.994, 112.843 503.083, 124.890 526.500 C 150.687 576.645, 190.066 630.917, 241.346 687 C 250.147 696.625, 272.007 719.149, 289.924 737.054 C 379.686 826.756, 453.791 881.510, 533.500 917.023 C 553.961 926.139, 584.495 937.979, 625.500 952.695 C 647.112 960.452, 650.020 961.388, 675 968.621 C 715.075 980.226, 722.573 981.435, 754 981.363 C 782.380 981.297, 804.299 977.979, 829.439 969.942 C 884.808 952.241, 944.568 911.686, 959.762 881.500 C 965.490 870.120, 974.170 838.356, 978.480 813 C 980.263 802.511, 981.659 774.764, 980.614 770.598 C 980.248 769.142, 978.296 766.120, 976.276 763.883 C 972.602 759.817, 961.028 751, 959.364 751 C 958.879 751, 957.136 753.233, 955.491 755.962 C 942.844 776.945, 908.612 803.210, 867.500 823.475 C 808.029 852.790, 755.148 858.858, 692 843.612 C 673.428 839.128, 650.893 832.118, 635.500 826.037 C 627.250 822.777, 604.491 814.065, 584.925 806.676 C 543.685 791.102, 527.605 784.276, 501.896 771.431 C 479.220 760.102, 470.871 755.245, 446.798 739.377 C 344.764 672.123, 225.322 552.435, 156.520 448.500 C 125.221 401.218, 108.509 366.518, 83.318 296.500 C 79.756 286.600, 73.550 270.393, 69.528 260.485 C 62.680 243.615, 53.087 213.700, 52.930 208.721 C 52.726 202.287, 51.338 203.841, 49.270 212.819"
                stroke="none"
                fill="#c33c2c"
                fill-rule="evenodd"
              />
              <path
                d="M 219 43.045 C 202.019 44.147, 175.359 49.899, 154.685 56.923 C 134.234 63.870, 111.728 86.282, 89.836 121.500 C 67.237 157.857, 50.912 195.231, 52.567 206.826 C 53.879 216.010, 62.337 242.772, 69.528 260.485 C 73.550 270.393, 79.756 286.600, 83.318 296.500 C 108.509 366.518, 125.221 401.218, 156.520 448.500 C 225.322 552.435, 344.764 672.123, 446.798 739.377 C 470.871 755.245, 479.220 760.102, 501.896 771.431 C 527.605 784.276, 543.685 791.102, 584.925 806.676 C 604.491 814.065, 627.250 822.777, 635.500 826.037 C 650.893 832.118, 673.428 839.128, 692 843.612 C 755.148 858.858, 808.029 852.790, 867.500 823.475 C 901.352 806.788, 929.874 786.677, 946.454 767.802 C 952.143 761.326, 958 752.888, 958 751.169 C 958 750.709, 952.263 746.939, 945.250 742.791 C 938.237 738.643, 923.500 729.933, 912.500 723.437 C 901.500 716.940, 885.115 708.123, 876.088 703.844 C 867.062 699.565, 854.462 692.972, 848.088 689.192 C 841.715 685.413, 833.800 680.808, 830.500 678.960 C 820.266 673.230, 810.734 666.906, 805 662.043 C 801.975 659.478, 794.550 654.732, 788.500 651.497 C 765.713 639.312, 767.508 640, 758.537 640 C 744.690 640, 735.607 644.400, 721.600 657.891 C 712.923 666.248, 688.634 695.163, 677.280 710.651 C 668.493 722.638, 653.450 739.333, 644.330 747.219 C 631.332 758.458, 620.311 761.354, 608.209 756.711 C 604.519 755.296, 598.072 752.943, 593.882 751.483 C 589.692 750.023, 581.367 745.714, 575.382 741.906 C 569.397 738.099, 560.225 732.456, 555 729.365 C 460.914 673.718, 400.351 621.626, 348.792 552 C 328.738 524.919, 308.485 493.179, 279.241 443 C 270.502 428.007, 264 411.990, 264 405.458 C 264 396.137, 271.972 382.262, 284.223 370.263 C 292.358 362.294, 319.667 340.321, 330.669 332.890 C 352.177 318.364, 372.242 297.217, 381.243 279.588 C 383.901 274.383, 384.337 272.483, 384.246 266.489 C 384.097 256.609, 380.825 248.423, 371.821 235.399 C 367.677 229.405, 363.097 222.154, 361.645 219.287 C 360.192 216.420, 357.695 212.583, 356.096 210.762 C 354.496 208.940, 347.471 196.886, 340.484 183.975 C 333.497 171.064, 327.432 160.050, 327.006 159.500 C 326.580 158.950, 322.745 151.975, 318.483 144 C 314.221 136.025, 307.252 123.650, 302.996 116.500 C 298.739 109.350, 291.292 96.300, 286.446 87.500 C 273.146 63.347, 265.482 51.933, 258.088 45.265 L 254.500 42.030 242.500 42.164 C 235.900 42.238, 225.325 42.635, 219 43.045 M 44.160 298.035 C 43.991 301.780, 47.341 321.437, 49.012 326.500 C 49.990 329.463, 49.995 329.457, 49.450 326 C 49.147 324.075, 48.047 317.775, 47.007 312 C 45.967 306.225, 44.936 299.925, 44.718 298 L 44.320 294.500 44.160 298.035 M 85.491 435 C 88.449 444.993, 104.923 486.410, 105.651 485.682 C 105.871 485.463, 105.098 483.082, 103.935 480.392 C 102.771 477.701, 98.241 466.069, 93.868 454.541 C 86.737 435.746, 83.427 428.025, 85.491 435 M 241.078 687.481 C 246.008 693.254, 270.201 720.080, 278.823 729.334 C 302.550 754.799, 352.662 799.687, 385.500 824.891 L 387.500 826.426 385.500 824.388 C 384.400 823.268, 378.131 817.884, 371.568 812.425 C 338.378 784.816, 287.921 736.726, 249.392 695.981 C 243.402 689.646, 239.660 685.821, 241.078 687.481 M 980.823 788 C 980.450 796.525, 979.635 806.116, 979.010 809.313 C 978.386 812.510, 978.058 815.660, 978.282 816.313 C 979.332 819.382, 982.103 793.638, 981.814 783.500 L 981.500 772.500 980.823 788 M 975.143 829.643 C 974.514 832.773, 974.186 835.519, 974.413 835.746 C 974.640 835.973, 975.354 833.612, 976 830.500 C 976.646 827.388, 976.975 824.641, 976.730 824.397 C 976.486 824.152, 975.771 826.513, 975.143 829.643 M 656.087 963.379 C 657.603 965.001, 681.178 972.819, 686.500 973.465 C 689.800 973.865, 692.275 973.970, 692 973.698 C 691.725 973.426, 684.300 971.115, 675.500 968.563 C 666.700 966.011, 658.600 963.660, 657.500 963.337 C 656.400 963.015, 655.764 963.034, 656.087 963.379 M 717 980.465 C 719.276 981.365, 724.345 981.825, 731.500 981.781 L 742.500 981.715 733 980.947 C 727.775 980.524, 721.250 979.932, 718.500 979.630 L 713.500 979.083 717 980.465"
                stroke="none"
                fill="#e34b3b"
                fill-rule="evenodd"
              />
            </svg>
            <a
              href="#"
              className="w-20 md:w-40 mb-1 ml-4 text-zinc-700 hover:text-zinc-500  text-[10px] "
            >
              +959 251801804, +959 251801805
            </a>
          </div>
          <div className="flex mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 800 800"
              version="1.1"
            >
              <path
                d="M 395.500 45.107 C 366.070 48.641, 333.477 59.158, 308.676 73.123 C 241.731 110.818, 197.778 177.698, 189.913 253.836 C 188.258 269.857, 189.231 299.341, 191.914 314.500 C 203.562 380.293, 248.642 480.227, 322.279 603.500 C 351.452 652.336, 418.477 755.801, 421.533 756.713 C 422.649 757.047, 445.697 722.740, 469.712 685 C 554.267 552.121, 612.544 440.643, 639.089 361 C 654.878 313.629, 658.354 278.821, 651.423 237.500 C 639.249 164.917, 591.172 100.679, 524.500 67.911 C 502.480 57.088, 481.101 50.231, 457.420 46.395 C 445.583 44.478, 407.359 43.683, 395.500 45.107 M 410.651 153.089 C 381.502 155.589, 353.532 169.113, 332.949 190.659 C 312.247 212.329, 301.120 238.600, 299.341 270 C 298.317 288.069, 302.492 309.229, 310.535 326.739 C 319.209 345.623, 337.006 366.233, 354.399 377.537 C 403.655 409.547, 467.655 402.719, 509.042 361.037 C 531.979 337.937, 543.988 308.304, 543.997 274.785 C 544.003 249.253, 537.609 228.120, 523.436 206.830 C 498.653 169.603, 455.859 149.212, 410.651 153.089"
                stroke="none"
                fill="#d63930"
                fill-rule="evenodd"
              />
            </svg>
            <a
              href="#"
              className=" w-40 ml-4 text-zinc-700 hover:text-zinc-500 text-[10px] "
            >
              No(71), Room A, Ground Floor, Upper Pazundaung Road Mingalar Taung
              Nyunt Township,Yangon.
            </a>
          </div>
        </div>

        <div className=" pl-6 md:pl-20 w-full lg:hidden ">
          <div className="">
            <h1 className="  mb-4 text-[12px] md:text-lg text-red-600 font-medium ">Information For</h1>
            <div className="flex justify-start gap-4">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-zinc-700 hover:text-zinc-500 text-[10px] mb-1"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-zinc-700 hover:text-zinc-500 text-[10px] mb-1"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-zinc-700 hover:text-zinc-500 text-[10px] mb-1"
                >
                  Local Classroom
                </a>
                <a
                  href="#"
                  className="text-zinc-700 hover:text-zinc-500 text-[10px] mb-1"
                >
                  Online Classroom
                </a>
                <a
                  href="#"
                  className="text-zinc-700 hover:text-zinc-500 text-[10px] mb-1"
                >
                  FAQ
                </a>
              </div>
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-zinc-700 hover:text-zinc-500 text-[10px] mb-1"
                >
                  News
                </a>
                <a href="#" className="text-zinc-700 hover:text-zinc-500 text-[10px]">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-14 bg-red-600 text-center py-4 text-white text-sm font-san font-semibold">
        © 2020 PKT Education Center All Rights Reserved.
      </div>
      <div className="absolute bottom-24 right-5 p-4 bg-white shadow-xl border rounded-full">
        <Image 
        src={'/images/arrow.png'}
        width={30}
        height={30}
        alt="arrow"
        />
      </div>
    </div>
  );
};

export default Footer;
