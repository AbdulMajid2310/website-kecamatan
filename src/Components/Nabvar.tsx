import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuLayanan = [
  {
    title: "Products",
    description: "Surat Keterangan Pindah antar",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Pengantar Surat Pindah",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Penerbitan Ijin Mendirikan Bangunan",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Legalisasi Surat Keterangan Waris",
    icon: SunIcon,
  },
  {
    description: "Pembuatan KTP",
    icon: GlobeAmericasIcon,
  },
  {
    description: "Pembuatan KK",
    icon: PhoneIcon,
  },
  {
    title: "Contact",
    description: "Ijin Usaha Mikro Kecil",
    icon: PhoneIcon,
  },
];
const navListMenuKelembagaan = [
  {
    title: "Products",
    description: "Surat Keterangan Pindah antar",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Pengantar Surat Pindah",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Penerbitan Ijin Mendirikan Bangunan",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Legalisasi Surat Keterangan Waris",
    icon: SunIcon,
  },
  {
    description: "Pembuatan KTP",
    icon: GlobeAmericasIcon,
  },
  {
    description: "Pembuatan KK",
    icon: PhoneIcon,
  },
  {
    title: "Contact",
    description: "Ijin Usaha Mikro Kecil",
    icon: PhoneIcon,
  },
];

const navListMenuDesa = [
  {
    title: "Products",
    description: "Surat Keterangan Pindah antar",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Pengantar Surat Pindah",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Penerbitan Ijin Mendirikan Bangunan",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Legalisasi Surat Keterangan Waris",
    icon: SunIcon,
  },
  {
    description: "Pembuatan KTP",
    icon: GlobeAmericasIcon,
  },
  {
    description: "Pembuatan KK",
    icon: PhoneIcon,
  },
  {
    title: "Contact",
    description: "Ijin Usaha Mikro Kecil",
    icon: PhoneIcon,
  },
];
const navListMenuPemberdayaan = [
  {
    title: "Products",
    description: "Surat Keterangan Pindah antar",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Pengantar Surat Pindah",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Penerbitan Ijin Mendirikan Bangunan",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Legalisasi Surat Keterangan Waris",
    icon: SunIcon,
  },
  {
    description: "Pembuatan KTP",
    icon: GlobeAmericasIcon,
  },
  {
    description: "Pembuatan KK",
    icon: PhoneIcon,
  },
  {
    title: "Contact",
    description: "Ijin Usaha Mikro Kecil",
    icon: PhoneIcon,
  },
];

function NavListLayanan() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuLayanan.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem
          placeholder={"undefined"}
          className="flex items-center gap-3 rounded-lg"
        >
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              placeholder={"undefined"}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm "
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={"undefined"}
            as="div"
            className="font-medium text-[18px]"
          >
            <ListItem
              placeholder={"undefined"}
              className="flex text-left ml-[-9px] lg:ml-0 gap-2 py-2  font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Layanan
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={"undefined"}
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid lg:grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListKelembagaan() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuKelembagaan.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem
          placeholder={"undefined"}
          className="flex items-center gap-3 rounded-lg"
        >
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              placeholder={"undefined"}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm "
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={"undefined"}
            as="div"
            className="font-medium text-[18px]"
          >
            <ListItem
              placeholder={"undefined"}
              className="flex text-left ml-[-9px] lg:ml-0 gap-2 py-2  font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Kelembagaan
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={"undefined"}
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid lg:grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListDesa() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuDesa.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem
          placeholder={"undefined"}
          className="flex items-center gap-3 rounded-lg"
        >
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              placeholder={"undefined"}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm "
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={"undefined"}
            as="div"
            className="font-medium text-[18px]"
          >
            <ListItem
              placeholder={"undefined"}
              className="flex text-left ml-[-9px] lg:ml-0 gap-2 py-2  font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Desa
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={"undefined"}
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid lg:grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListPemberdayaan() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuPemberdayaan.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem
          placeholder={"undefined"}
          className="flex items-center gap-3 rounded-lg"
        >
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              placeholder={"undefined"}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm "
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={"undefined"}
            as="div"
            className="font-medium text-[18px]"
          >
            <ListItem
              placeholder={"undefined"}
              className="flex text-left ml-[-9px] lg:ml-0 gap-2 py-2  font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Pemberdayaan
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={"undefined"}
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid lg:grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:pr-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        placeholder={""}
        as="li"
        color="blue-gray"
        className="p-1 font-medium text-[18px]"
      >
        <Link
          to={"/"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Beranda
        </Link>
      </Typography>

      <Typography
        placeholder={""}
        as="li"
        color="blue-gray"
        className="p-1 font-medium text-[18px]"
      >
        <Link
          to={"profil"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Profil
        </Link>
      </Typography>
      <NavListLayanan />
      <NavListKelembagaan />
      <NavListDesa />
      <NavListPemberdayaan />

      <Typography
        placeholder={""}
        as="li"
        color="blue-gray"
        className="p-1 font-medium text-[18px]"
      >
        <Link
          to={"berita"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Berita
        </Link>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        color="blue-gray"
        className="p-1 font-medium text-[18px]"
      >
        <Link
          to={"kontak"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Kontak
        </Link>
      </Typography>
    </ul>
  );
}
const Nabvar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      placeholder={""}
      className="mx-auto max-w-full fixed z-40 px-6 py-3"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder={""}
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          placeholder={""}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nabvar;
