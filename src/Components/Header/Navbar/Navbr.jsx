import { NavLink } from "react-router-dom";

const Navbr = () => {
    return (
        <div>
             <div className="">
      <nav className="flex justify-between items-center py-6 shadow-md px-5">

     <h1 className="text-xl font-semibold ">Phone Shop</h1>

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }
            >
              Favorites
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }
            >
              Login
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>
        </div>
    );
};

export default Navbr;