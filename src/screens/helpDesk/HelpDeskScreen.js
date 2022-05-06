import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {COLORS, Icon, SIZES} from '../../constants';
import moment from 'moment';
import {CustomDatePicker} from '../../components/CustomDatePicker';
import SelectDropdown from 'react-native-select-dropdown';
import {DataTable} from 'react-native-paper';
import {HelpDeskController} from './../../controllers/controller/HelpDeskController';

const {width, height} = Dimensions.get('screen');

const HelpDeskScreen = props => {
  var currentDate = new Date();
  var y = currentDate.getFullYear();
  var m = currentDate.getMonth();
  var firstDay = new Date(y, m, 1);
  const [helpDeskData, setHelpDeskData] = useState([]);
  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(currentDate);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [tableHead, setTableHead] = useState([
    {name: 'No'},
    {name: 'User'},
    {name: 'Ticket Name'},
    {name: 'Priority'},
    {name: 'Main Category'},
    {name: 'Sub Category'},
    {name: 'Ticket Status'},
    {name: 'Action'},
    {name: 'Ticket Description'},
    {name: 'Assignment Department'},
    {name: 'Assignment Branch'},
    {name: 'Assign Person'},
    {name: 'Comment'},
    {name: 'Request Date'},
    {name: 'Response Date'},
    {name: 'Calculation time'},
    {name: 'Action'},
  ]);
  const numberOfItemsPerPageList = [10, 20, 50];
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, helpDeskData.length);

  useEffect(() => {
    getHelpDesk();
  }, []);

  const getHelpDesk = () => {
    HelpDeskController.getHelpDesk(
      15,
      moment(startDate).format('YYYY-MM-DD'),
      moment(endDate).format('YYYY-MM-DD'),
      0,
      data => {
        let temp = data && data.map((v, k) => ({...v, key: k + 1}));
        setHelpDeskData(temp);
      },
    );
  };

  const searchWithStatus = () => {
    getHelpDesk();
  };

  const onAddNew = text => {
    props.navigation.navigate('helpDeskForm', {id: null, title: 'AddNew'});
  };

  const onViewClick = ticketId => {
    props.navigation.navigate('helpDeskForm', {id: ticketId, title: 'View'});
  };

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <CustomHeader title="Help Desk" />
      <View style={styles.container}>
        <View style={styles.startDateEndDate}>
          <CustomDatePicker
            date={startDate}
            setDate={setStartDate}
            minDate={null}
            maxDate={endDate}
            dateTitle={'Start Date'}
            open={openStart}
            setOpen={setOpenStart}
          />
          <CustomDatePicker
            date={endDate}
            setDate={setEndDate}
            minDate={startDate}
            maxDate={currentDate}
            dateTitle="End Date"
            open={openEnd}
            setOpen={setOpenEnd}
          />
        </View>
        <View style={styles.statusButton}>
          <View style={{width: '48%', height: 50}}>
            <Text style={{marginLeft: 5, color: COLORS.black, fontSize: 14}}>
              Ticket Status
            </Text>

            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              buttonStyle={{width: '100%', height: 30}}
              buttonTextStyle={{fontSize: 12}}
              rowTextStyle={{fontSize: 12}}
              dropdownIconPosition={'left'}
            />
          </View>
          <View
            style={{
              width: '48%',
              height: 50,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 70,
                height: 30,
                backgroundColor: COLORS.primary,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => searchWithStatus()}>
              <Text style={{color: COLORS.white}}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.tableContainer}>
          <DataTable
            style={{
              height: height / 2,
            }}>
            <DataTable.Header style={{backgroundColor: COLORS.lightGray1}}>
              {tableHead.map((header, index) => (
                <DataTable.Title
                  key={index}
                  style={{
                    maxWidth: 320,
                    width: 120,
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{header.name}</Text>
                </DataTable.Title>
              ))}
            </DataTable.Header>
            <ScrollView>
              {helpDeskData
                .slice(
                  page * numberOfItemsPerPage,
                  page * numberOfItemsPerPage + numberOfItemsPerPage,
                )
                .map((row, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.key}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.fullname}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.ticket_name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.priority}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.category_name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.sub_category_name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.ticket_status}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>
                        {row.action_status === 1
                          ? 'Accept'
                          : row.action_status === 2
                          ? 'Reject'
                          : 'Request'}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.ticket_desc}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.departmentId}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.branchId}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.assign_person_name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{row.request_comment}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>
                        {moment(row.createdAt).format('MM-DD-YYYY HH:mm a')}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>
                        {row.updatedAt == null
                          ? null
                          : moment(row.updatedAt).format('MM-DD-YYYY HH:mm a')}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <Text>{462837}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellStyle}>
                      <TouchableOpacity
                        style={styles.btnViewEdit}
                        onPress={() => onViewClick(row.helpDesk_ticket_id)}>
                        <Text style={{color: COLORS.white}}>View</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.btnViewEdit}>
                        <Text style={{color: COLORS.white}}>Edit</Text>
                      </TouchableOpacity>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </ScrollView>
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(
                helpDeskData.length / numberOfItemsPerPage,
              )}
              onPageChange={page => setPage(page)}
              label={`${from + 1}-${to} of ${helpDeskData.length}`}
              showFastPaginationControls
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={numberOfItemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              selectPageDropdownLabel={'Rows per page'}
            />
          </DataTable>
        </ScrollView>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => onAddNew('addNew')}>
          <Text style={{color: COLORS.white, fontSize: SIZES.body3}}>
            Add New
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpDeskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startDateEndDate: {
    width: width - 20,
    height: 50,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statusButton: {
    width: width - 20,
    height: 50,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  tableContainer: {
    marginTop: 30,
  },
  btnAdd: {
    width: width - 100,
    height: 40,
    backgroundColor: COLORS.primary,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cellStyle: {
    maxWidth: 300,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnViewEdit: {
    width: 50,
    height: 20,
    backgroundColor: COLORS.viewBtnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
