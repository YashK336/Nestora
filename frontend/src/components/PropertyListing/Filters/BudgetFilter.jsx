import { Range, getTrackBackground } from "react-range";
const MIN = 0;
const MAX = 60000000;

const BudgetFilter = ({ filters, setFilters }) => {
    return (

        <div className="mb-8">
        <div className="mb-3 flex justify-between text-sm text-gray-500 dark:text-slate-400">

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
                        "#E5E7EB dark:bg-slate-600",
                        "#2563EB dark:bg-blue-600",
                        "#E5E7EB dark:bg-slate-600"
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
            
            className="h-5 w-5 rounded-full border-4 border-blue-600 bg-white shadow-lg dark:bg-slate-600 
            dark:border-blue-600"
            >
            
            </div>
            
            )}
            />
            <div className="mt-5 flex justify-between">
                <div
                    className="
                    rounded-lg
                    bg-blue-50 dark:bg-blue-900
                    px-4
                    py-2
                    mx-2
                    text-sm
                    font-semibold
                    text-blue-700 dark:text-blue-400
                    "
                    >
                    Min
                    ₹{(filters.minPrice/100000).toFixed(0)}L
                </div>
                <div
                    className="
                    rounded-lg
                    bg-blue-50 dark:bg-blue-900
                    px-4
                    py-2
                    mx-2
                    text-sm
                    font-semibold
                    text-blue-700 dark:text-blue-400
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