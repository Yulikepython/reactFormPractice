import React from "react"
import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;


  const MoveInPrepChecks = ({plainOptions, defaultCheckedList}) => {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
  
    const onChange = list => {
      setCheckedList(list);
      setIndeterminate(!!list.length && list.length < plainOptions.length);
      setCheckAll(list.length === plainOptions.length);
    };
  
    const onCheckAllChange = e => {
      setCheckedList(e.target.checked ? plainOptions : []);
      setIndeterminate(false);
      setCheckAll(e.target.checked);
    };
  
    return (
      <>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          全て完了
        </Checkbox>
        <Divider />
        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      </>
    );
  };

  
  export default MoveInPrepChecks
