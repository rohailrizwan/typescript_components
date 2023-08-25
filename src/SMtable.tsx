type myprops = {
        label: string;
        data: any[];
        cols: any[];
};
export default function MYtable(props: myprops) {

        return (
                <div>
                 <h1>{props.label}</h1>
                 <table border={1} >
                <thead>
                 <tr>
                        {
                                props.cols.map((obj, i) => (
                                  <th>{obj.heading}</th>
                        ))
                
                }
                                 </tr>
                                </thead>
                                <tbody>
                                        {
                                                props.data.map((obj, index) => {
                                                        return (
                                                                <tr key={index}>
                                                                        {
                                                                                props.cols.map((x, y) => {
                                                                                        return (
                                                                                                <td>{obj[x.key]}</td>
                                                                                        )
                                                                                })
                                                                        }
                                                                </tr>
                                                        )
                                                })
                                        }
                                </tbody>
                        </table>
                </div>
        )
};

