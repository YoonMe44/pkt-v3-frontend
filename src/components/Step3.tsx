import React from "react";

const Step3: React.FC = () => {
  return (
    <div>
      
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        {/* Add other form fields for Step 1 */}
      </form>
    </div>
  );
};

export default Step3;
