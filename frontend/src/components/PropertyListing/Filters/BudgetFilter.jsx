import { Range, getTrackBackground } from "react-range";
const MIN = 0;
const MAX = 60000000;

const BudgetFilter = ({ filters, setFilters }) => {
    return (

        <div className="mb-8">
        
        <h3 className="mb-6 text-lg font-semibold">
        
        Budget
        
        </h3>
        <div className="mb-3 flex justify-between text-sm text-gray-500">

        <span>

        ₹0

        </span>

        <span>

        ₹6 Cr

        </span>

</div>
<Range
    step={100000}

    min={MIN}

    max={MAX}

    values={[
        filters.minPrice,
        filters.maxPrice,
    ]}

    onChange={(values)=>{

        setFilters(prev=>({

            ...prev,

            minPrice:values[0],

            maxPrice:values[1],

        }));

    }}
    renderTrack={({ props, children }) => (

        <div
            {...props}
        
            className="h-2 w-full rounded-full"
        
            style={{
        
                background:getTrackBackground({
        
                    values:[
                        filters.minPrice,
                        filters.maxPrice
                    ],
        
                    colors:[
                        "#E5E7EB",
                        "#2563EB",
                        "#E5E7EB"
                    ],
        
                    min:MIN,
        
                    max:MAX
        
                })
        
            }}
        >
        
        {children}
        
        </div>
        
        )}
        renderThumb={({ props }) => (

            <div
            
            {...props}
            
            className="
            h-5
            w-5
            
            rounded-full
            
            border-4
            border-blue-600
            
            bg-white
            
            shadow-lg
            "
            
            >
            
            </div>
            
            )}
            />
            <div className="mt-5 flex justify-between">
                <div
                    className="
                    rounded-lg
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-700
                    "
                    >
                    Min
                    ₹{(filters.minPrice/100000).toFixed(0)}L
                </div>
                <div
                    className="
                    rounded-lg
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-700
                    "
                    >
                    Max
                    ₹{(filters.maxPrice/10000000).toFixed(2)} Cr
                </div>
            </div>
        </div>
    );
};
export default BudgetFilter;