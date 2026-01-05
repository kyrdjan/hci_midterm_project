import { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function Customize() {

  const [cakeOptions, setCakeOptions] = useState({
    layer: 1,
    cake_flavor: [],
    filling_flavor: [],
    icing_flavor: [],
    size: "",
    message_on_cake: "",
    detailed_instructions: "",
    image_reference: null,
  });

  const [customFlavorEnabledCake, setCustomFlavorEnabledCake] = useState(false);
  const [customFlavorCake, setCustomFlavorCake] = useState('');

  const [customFlavorEnabledfilling, setCustomFlavorEnabledfilling] = useState(false);
  const [customFlavorfilling, setCustomFlavorfilling] = useState('');

  const [customFlavorEnabledIcing, setCustomFlavorEnabledIcing] = useState(false);
  const [customFlavorIcing, setCustomFlavorIcing] = useState('');

  //image upload handler
  const [imagePreview, setImagePreview] = useState(null);

  // Notification state - MOVE THIS HERE, NOT INSIDE handleSubmit
  const [showNotification, setShowNotification] = useState(false);

  // Handle layer selection
  const handleLayerChange = (layer) => {
    setCakeOptions(prev => ({
      ...prev,
      layer: layer
    }));
  };

  // Handle checkbox changes for flavors
  const handleFlavorChange = (flavor, category) => {
    setCakeOptions(prev => {
      const currentFlavors = prev[category];
      const isChecked = currentFlavors.includes(flavor);
      
      return {
        ...prev,
        [category]: isChecked 
          ? currentFlavors.filter(f => f !== flavor)
          : [...currentFlavors, flavor]
      };
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCakeOptions(prev => ({
        ...prev,
        image_reference: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const handleRemoveImage = () => {
    setCakeOptions(prev => ({
      ...prev,
      image_reference: null
    }));
    setImagePreview(null);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add custom flavors to the arrays if they're enabled
    const finalCakeOptions = {
      ...cakeOptions,
      cake_flavor: customFlavorEnabledCake && customFlavorCake
        ? [...cakeOptions.cake_flavor, customFlavorCake]
        : cakeOptions.cake_flavor,
      filling_flavor: customFlavorEnabledfilling && customFlavorfilling
        ? [...cakeOptions.filling_flavor, customFlavorfilling]
        : cakeOptions.filling_flavor,
      icing_flavor: customFlavorEnabledIcing && customFlavorIcing
        ? [...cakeOptions.icing_flavor, customFlavorIcing]
        : cakeOptions.icing_flavor,
    };

    console.log('Form Submitted:', finalCakeOptions);
    
    // Show notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);

    console.log('Final Cake Options:', finalCakeOptions);
  };

  

  return (
    <div>
      <div className="flex flex-col items-center justify-start w-full pt-40">
        <h1 className="text-5xl font-bold text-[#E74A4A] text-shadow-[-2px_2px_0px_#F7C4C4]">
          Customize Your Product!
        </h1>
      </div>
      <div className="flex flex-col items-start justify-center w-full pt-10 gap-10 px-10">
        {/* details section */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold text-[#490101]">Cake form</h1>
          <div className="flex justify-center w-full">
            {/* form inputs */}
            <form className="flex flex-col gap-5 pt-5 max-w-3xl w-full px-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Cake Layer</h2>
                <FormGroup row sx={{ gap: 2, flexWrap: "wrap" }}>
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.layer === 1}
                        onChange={() => handleLayerChange(1)}
                      />
                    } 
                    label="1 Layer" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.layer === 2}
                        onChange={() => handleLayerChange(2)}
                      />
                    } 
                    label="2 Layers" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.layer === 3}
                        onChange={() => handleLayerChange(3)}
                      />
                    } 
                    label="3 Layers" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.layer === 4}
                        onChange={() => handleLayerChange(4)}
                      />
                    } 
                    label="4 Layers" 
                  />
                </FormGroup>
              </div>

              {/* Cake Flavor */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Cake Flavor</h2>
                <FormGroup row sx={{ gap: 2, flexWrap: "wrap" }}>
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.cake_flavor.includes('Chocolate')}
                        onChange={() => handleFlavorChange('Chocolate', 'cake_flavor')}
                      />
                    } 
                    label="Chocolate" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.cake_flavor.includes('Vanilla')}
                        onChange={() => handleFlavorChange('Vanilla', 'cake_flavor')}
                      />
                    } 
                    label="Vanilla" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.cake_flavor.includes('Red Velvet')}
                        onChange={() => handleFlavorChange('Red Velvet', 'cake_flavor')}
                      />
                    } 
                    label="Red Velvet" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.cake_flavor.includes('Ube')}
                        onChange={() => handleFlavorChange('Ube', 'cake_flavor')}
                      />
                    } 
                    label="Ube" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.cake_flavor.includes('Cheesecake')}
                        onChange={() => handleFlavorChange('Cheesecake', 'cake_flavor')}
                      />
                    } 
                    label="Cheesecake" 
                  />
                  
                  <div className="flex items-center gap-2">
                    <FormControlLabel 
                      control={
                        <Checkbox 
                          checked={customFlavorEnabledCake}
                          onChange={(e) => setCustomFlavorEnabledCake(e.target.checked)}
                        />
                      } 
                      label="Other:" 
                    />
                    <TextField
                      size="small"
                      placeholder="Specify flavor"
                      variant="outlined"
                      value={customFlavorCake}
                      onChange={(e) => setCustomFlavorCake(e.target.value)}
                      disabled={!customFlavorEnabledCake}
                      sx={{ width: '200px' }}
                    />
                  </div>
                </FormGroup>
              </div>

              {/* Filling Flavor */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Filling Flavor</h2>
                <FormGroup row sx={{gap: 2, flexWrap:"wrap"}}>
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.filling_flavor.includes('None')}
                        onChange={() => handleFlavorChange('None', 'filling_flavor')}
                      />
                    } 
                    label="None" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.filling_flavor.includes('Chocolate Ganache')}
                        onChange={() => handleFlavorChange('Chocolate Ganache', 'filling_flavor')}
                      />
                    } 
                    label="Chocolate Ganache" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.filling_flavor.includes('Strawberry Jam')}
                        onChange={() => handleFlavorChange('Strawberry Jam', 'filling_flavor')}
                      />
                    } 
                    label="Strawberry Jam" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.filling_flavor.includes('Cream Cheese')}
                        onChange={() => handleFlavorChange('Cream Cheese', 'filling_flavor')}
                      />
                    } 
                    label="Cream Cheese" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.filling_flavor.includes('Lemon Curd')}
                        onChange={() => handleFlavorChange('Lemon Curd', 'filling_flavor')}
                      />
                    } 
                    label="Lemon Curd" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.filling_flavor.includes('Vanilla Custard')}
                        onChange={() => handleFlavorChange('Vanilla Custard', 'filling_flavor')}
                      />
                    } 
                    label="Vanilla Custard" 
                  />
                  <div className="flex items-center gap-2">
                    <FormControlLabel 
                      control={
                        <Checkbox
                          checked={customFlavorEnabledfilling}
                          onChange={(e) => setCustomFlavorEnabledfilling(e.target.checked)}
                        />
                      } 
                      label="Other:" 
                    />
                    <TextField
                      size="small"
                      placeholder="Specify flavor"
                      variant="outlined"
                      value={customFlavorfilling}
                      onChange={(e) => setCustomFlavorfilling(e.target.value)}
                      disabled={!customFlavorEnabledfilling}
                      sx={{ width: '200px' }}
                    />
                  </div>
                </FormGroup>
              </div>

              {/* Icing Flavor */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Icing Flavor</h2>
                <FormGroup row sx={{gap: 2, flexWrap:"wrap"}}>
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.icing_flavor.includes('None')}
                        onChange={() => handleFlavorChange('None', 'icing_flavor')}
                      />
                    } 
                    label="None" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.icing_flavor.includes('Chocolate')}
                        onChange={() => handleFlavorChange('Chocolate', 'icing_flavor')}
                      />
                    } 
                    label="Chocolate" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.icing_flavor.includes('Vanilla')}
                        onChange={() => handleFlavorChange('Vanilla', 'icing_flavor')}
                      />
                    } 
                    label="Vanilla" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.icing_flavor.includes('Red Velvet')}
                        onChange={() => handleFlavorChange('Red Velvet', 'icing_flavor')}
                      />
                    } 
                    label="Red Velvet" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.icing_flavor.includes('Ube')}
                        onChange={() => handleFlavorChange('Ube', 'icing_flavor')}
                      />
                    } 
                    label="Ube" 
                  />
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={cakeOptions.icing_flavor.includes('Cheesecake')}
                        onChange={() => handleFlavorChange('Cheesecake', 'icing_flavor')}
                      />
                    } 
                    label="Cheesecake" 
                  />

                  <div className="flex items-center gap-2">
                    <FormControlLabel 
                      control={
                        <Checkbox
                          checked={customFlavorEnabledIcing}
                          onChange={(e) => setCustomFlavorEnabledIcing(e.target.checked)}
                        />
                      } 
                      label="Other:" 
                    />
                    <TextField
                      size="small"
                      placeholder="Specify flavor"
                      variant="outlined"
                      value={customFlavorIcing}
                      onChange={(e) => setCustomFlavorIcing(e.target.value)}
                      disabled={!customFlavorEnabledIcing}
                      sx={{ width: '200px' }}
                    />
                  </div>
                </FormGroup>
              </div>

              {/* Size */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Size</h2>
                <TextField 
                  size="medium" 
                  placeholder="Cake size in inches" 
                  variant="outlined" 
                  value={cakeOptions.size}
                  onChange={(e) => setCakeOptions(prev => ({ ...prev, size: e.target.value }))}
                  sx={{ width: '200px' }}
                />
              </div>

              {/* Message on Cake */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Message on Cake</h2>
                <TextField 
                  size="medium"
                  placeholder="Message on top of cake"
                  variant="outlined"
                  value={cakeOptions.message_on_cake}
                  onChange={(e) => setCakeOptions(prev => ({ ...prev, message_on_cake: e.target.value }))}
                  sx={{ width: '200px' }}
                />
              </div>

              {/* Detailed Instructions */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#490101]">Detailed Instructions</h2>
                <TextField 
                  size="medium"
                  placeholder="Any additional details or instructions"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={cakeOptions.detailed_instructions}
                  onChange={(e) => setCakeOptions(prev => ({ ...prev, detailed_instructions: e.target.value }))}
                  sx={{ width: '400px' }}
                /> 
              </div>

              {/* Image Reference */}
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-[#490101]">Image Reference</h2>

                <input 
                  accept="image/*"
                  style={{display:'none'}}
                  id="image-upload-button"
                  type="file"
                  onChange={handleImageUpload}
                />

                <label htmlFor="image-upload-button">
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      backgroundColor: '#490101',
                      '&:hover': {
                        backgroundColor: '#6B0202',
                      },
                    }}
                  >
                    Upload Image
                  </Button>
                </label>

                {imagePreview && (
                  <div className="flex flex-col gap-2">
                    <img 
                      src={imagePreview} 
                      alt="Cake reference" 
                      className="w-64 h-64 object-cover rounded-lg border-2 border-[#490101]"
                    />
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveImage}
                      sx={{ width: '200px' }}
                    >
                      Remove Image
                    </Button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8 mb-8">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#490101',
                    '&:hover': {
                      backgroundColor: '#6B0202',
                    },
                    paddingX: 6,
                    paddingY: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Save Customization
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-semibold">Cake customization saved successfully!</span>
          </div>
        </div>
      )}

      {/* customize cakes here */}
      <div className="flex flex-col items-center justify-center w-full pt-10 mb-40 px-10">
        <h1 className="text-4xl font-bold text-[#490101] mb-8">Our customize cake</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-7xl">
          <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#490101]">
            <img 
              src="src\assets\cake_1.webp" 
              alt="Cake 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#490101]">
            <img 
              src="src\assets\cake_2.webp" 
              alt="Cake 2" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#490101]">
            <img 
              src="src\assets\cake_3.webp" 
              alt="Cake 3" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#490101]">
            <img 
              src="src\assets\cake_4.webp" 
              alt="Cake 4" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#490101]">
            <img 
              src="src\assets\cake_5.webp" 
              alt="Cake 5" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#490101]">
            <img 
              src="src\assets\cake_6.webp" 
              alt="Cake 6" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;