import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import CustomHeader from '../../../components/CustomHeader';
import {Picker} from '@react-native-picker/picker';
import {COLORS, Icon, SIZES} from '../../../constants';
import CustomDropDown from './../../../components/CustomDropDown';
import moment from 'moment';
import CustomTextBox from '../../../components/CustomTextBox';
import {HelpDeskController} from './../../../controllers/controller/HelpDeskController';
import DocumentPicker, {types} from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import {baseUrl} from './../../../controllers/constant/baseUrl';
import {handleResponse} from './../../../controllers/constant/handleResponse';

const HelpDeskForm = ({route}) => {
  const {id, title} = route.params;
  const navigation = useNavigation();

  //------------Add New -------------
  let requestDateText = moment(new Date()).format('DD-MM-YYYY');
  const [newHelpDesk, setNewHelpDesk] = useState({
    interExter: 0,
    requestedDep: 0,
    ticketCode: '',
    ticketName: '',
    ticketMainCategory: 0,
    ticketSubCategory: 0,
    ticketStatus: 0,
    ticketDescription: '',
    priorityId: 0,
    priority: '',
    locationBranch: 0,
    assignPerson: 0,
    comment: '',
    severityId: 0,
    severity: '',
  });

  const [ticketMain, setTicketMain] = useState([]);
  const [ticketMainAll, setTicketMainAll] = useState([]);
  const [ticketSub, setTicketSub] = useState([]);
  const [ticketSubAll, setTicketSubAll] = useState([]);
  const [ticketStatus, setTicketStatus] = useState([]);
  const [ticketCategoryType, setTicketCategoryType] = useState([]);
  const [branch, setBranch] = useState([]);
  const [deparment, setDepartment] = useState([]);
  const [assignPerson, setAssignPerson] = useState([]);
  const [fileResponse, setFileResponse] = useState([]);

  const onValueChange = (text, value) => {
    const temp = {...newHelpDesk};
    temp[text] = value;
    setNewHelpDesk(temp);
  };

  const onInterExterChange = (text, value) => {
    const temp = {...newHelpDesk};
    temp[text] = value;
    let main = [];
    if (newHelpDesk.requestedDep != 0) {
      main = ticketMainAll.filter(
        a =>
          a.ticket_category_type == value &&
          a.departments_id == newHelpDesk.requestedDep,
      );
    } else {
      main = ticketMainAll.filter(a => a.ticket_category_type == value);
    }
    setTicketMain(main);
    setNewHelpDesk(temp);
  };

  const onDepartmentChange = (text, value) => {
    const temp = {...newHelpDesk};
    temp[text] = value;
    let main;
    if (newHelpDesk.interExter != 0) {
      main = ticketMainAll.filter(
        a =>
          a.departments_id == value &&
          a.ticket_category_type == newHelpDesk.interExter,
      );
    } else {
      main = ticketMainAll.filter(a => a.departments_id == value);
    }
    HelpDeskController.getAssignPersonByBranchAndDepartment(
      value,
      newHelpDesk.locationBranch,
      data => {
        setAssignPerson(data);
      },
    );
    setTicketMain(main);
    setNewHelpDesk(temp);
  };

  const onTicketMainChange = (text, value) => {
    const temp = {...newHelpDesk};
    temp[text] = value;
    let sub = ticketSubAll.filter(s => s.main_category_id == value);
    setTicketSub(sub);
    setNewHelpDesk(temp);
  };

  const onTicketSubChange = (text, value) => {
    const temp = {...newHelpDesk};
    temp[text] = value;

    let subFilter = ticketSubAll.filter(s => s.value == value);
    temp['severity'] = subFilter[0].severity_name;
    temp['severityId'] = subFilter[0].severity_id;
    temp['priority'] = subFilter[0].priority;
    temp['priorityId'] = subFilter[0].priority_id;
    setNewHelpDesk(temp);
  };

  const onLocationBranchChange = (text, value) => {
    const temp = {...newHelpDesk};
    temp[text] = value;
    setNewHelpDesk(temp);
    HelpDeskController.getAssignPersonByBranchAndDepartment(
      newHelpDesk.requestedDep,
      value,
      data => {
        setAssignPerson(data);
      },
    );
  };

  const onClickAttachment = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });

      setFileResponse(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(
          'User cancelled the picker, exit any dialogs or menus and move on',
        );
      } else {
        throw err;
      }
    }
  }, []);

  const getHelpDeskDatas = () => {
    const tempSub = [];
    HelpDeskController.getDepartment(dep => {
      // console.log('dep =====>', dep);
      setDepartment(dep);
    });
    HelpDeskController.getTicketMainCategory(main => {
      setTicketMainAll(main);
    });
    HelpDeskController.getTicketSubCategory(sub => {
      setTicketSubAll(sub);
    });
    HelpDeskController.getTicketCategoryType(type => {
      setTicketCategoryType(type);
    });
    HelpDeskController.getTicketStatus(sta => {
      // console.log('status ===>', sta);
      setTicketStatus(sta);
    });
    HelpDeskController.getBranch(branch => {
      setBranch(branch);
    });
  };

  const onSubmit = () => {
    let file = [];
    var obj = {
      ticketCategoryType: newHelpDesk.interExter,
      requestedDepartment: newHelpDesk.requestedDep,
      ticketCode: newHelpDesk.ticketCode,
      ticketName: newHelpDesk.ticketName,
      ticketMainCategory: newHelpDesk.ticketMainCategory,
      ticketSubCategory: newHelpDesk.ticketSubCategory,
      ticketStatus: newHelpDesk.ticketStatus,
      ticketDescription: newHelpDesk.ticketDescription,
      priorityId: newHelpDesk.priorityId,
      locationBranch: newHelpDesk.locationBranch,
      assignPerson: newHelpDesk.assignPerson,
      comment: newHelpDesk.comment,
      severityId: newHelpDesk.severityId,
    };
    // for (const f of fileResponse) {
    //   file.push({
    //     name: f.name,
    //     type: f.type,
    //     uri: Platform.OS === 'ios' ? f.uri.replace('file://', '') : f.uri,
    //   });
    // }

    try {
      const data = new FormData();

      for (const f of fileResponse) {
        data.append('uploadfile', {
          name: f.name,
          type: f.type,
          uri: Platform.OS === 'ios' ? f.uri.replace('file://', '') : f.uri,
        });
      }

      fileResponse.map(f => {
        var haha = {};
        haha['name'] = f.name;
        haha['type'] = f.type;
        haha['uri'] =
          Platform.OS === 'ios' ? f.uri.replace('file://', '') : f.uri;
        file.push(haha);
      });

      HelpDeskController.addHelpDesk({info: obj, data}, data => {
        console.log(data);
      });

      // fetch(baseUrl + 'helpDesk/addHelpDesk', {
      //   method: 'POST',
      //   body: JSON.stringify(obj),
      //   headers: {
      //     // 'Content-Type': 'multipart/form-data',
      //     Accept: 'application/json',
      //   },
      // })
      //   .then(data => console.log('add Successfully', data))
      //   .catch(err => console.log('error: ', err));
    } catch (e) {
      console.log('c error');
      console.error(e);
    }
  };
  //-----------Add New -----------

  //----------View Data ----------
  const [helpDeskViewData, setHelpDeskViewData] = useState({});
  const [requesterInformation, setRequesterInformation] = useState({});
  const getHelpDeskViewData = () => {
    HelpDeskController.getHelpDeskViewData(id, data => {
      setHelpDeskViewData(data.helpDesk[0]);
    });

    HelpDeskController.getRequesterInformation(998, data => {
      setRequesterInformation(data);
    });
  };
  //----------View Data ----------

  useEffect(() => {
    if (title == 'AddNew') {
      getHelpDeskDatas();
    } else if (title == 'View') {
      getHelpDeskViewData();
    }
  }, []);

  return (
    <>
      {title == 'AddNew' ? (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View
            style={{
              height: 50,
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: COLORS.primary,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Image
                  source={Icon.back}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                  }}
                />
              </TouchableOpacity>

              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    color: COLORS.white,
                  }}>
                  Help Desk
                </Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.container}>
            <CustomDropDown
              value={newHelpDesk.interExter}
              onValueChange={v => onInterExterChange('interExter', v)}
              title={'Internal / External'}
              data={ticketCategoryType}
              star={true}
            />
            <View
              style={{
                width: '90%',
                height: 80,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                Request Date
                <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
                  *
                </Text>
              </Text>
              <View>
                <TextInput
                  style={{
                    height: 50,
                    backgroundColor: COLORS.lightGray1,
                    padding: 10,
                  }}
                  editable={false}
                  value={requestDateText}
                />
              </View>
            </View>
            <CustomDropDown
              value={newHelpDesk.requestedDep}
              onValueChange={v => onDepartmentChange('requestedDep', v)}
              title={'Requested Department'}
              data={deparment}
              star={true}
            />
            {/* <CustomTextBox
              value={newHelpDesk.ticketCode}
              onValueChange={v => onValueChange('ticketCode', v)}
              title={'Ticket Code'}
              star={true}
            /> */}
            <CustomTextBox
              value={newHelpDesk.ticketName}
              onValueChange={v => onValueChange('ticketName', v)}
              title={'Ticket Name'}
              star={true}
            />
            <CustomDropDown
              value={newHelpDesk.ticketMainCategory}
              onValueChange={v => onTicketMainChange('ticketMainCategory', v)}
              title={'Ticket Main Category'}
              data={
                newHelpDesk.interExter != 0 || newHelpDesk.requestedDep != 0
                  ? ticketMain
                  : null
              }
              star={true}
            />
            <CustomDropDown
              value={newHelpDesk.ticketSubCategory}
              onValueChange={v => onTicketSubChange('ticketSubCategory', v)}
              title={'Ticket Sub Category'}
              data={newHelpDesk.ticketMainCategory != 0 ? ticketSub : null}
              star={true}
            />
            <CustomDropDown
              value={newHelpDesk.ticketStatus}
              onValueChange={v => onValueChange('ticketStatus', v)}
              title={'Ticket Status'}
              data={ticketStatus}
              star={true}
            />
            <CustomTextBox
              value={newHelpDesk.ticketDescription}
              onValueChange={v => onValueChange('ticketDescription', v)}
              title={'Ticket Description'}
            />
            <View
              style={{
                width: '90%',
                height: 80,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                Severity
                <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
                  *
                </Text>
              </Text>
              <View>
                <TextInput
                  style={{
                    height: 50,
                    backgroundColor: COLORS.lightGray1,
                    padding: 10,
                  }}
                  editable={false}
                  value={newHelpDesk.severity}
                />
              </View>
            </View>
            <View
              style={{
                width: '90%',
                height: 80,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                Priority
                <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
                  *
                </Text>
              </Text>
              <View>
                <TextInput
                  style={{
                    height: 50,
                    backgroundColor: COLORS.lightGray1,
                    padding: 10,
                  }}
                  editable={false}
                  value={newHelpDesk.priority}
                />
              </View>
            </View>
            <CustomDropDown
              value={newHelpDesk.locationBranch}
              onValueChange={v => onLocationBranchChange('locationBranch', v)}
              title={'Location / Branch'}
              data={branch}
              star={true}
            />
            <CustomDropDown
              value={newHelpDesk.assignPerson}
              onValueChange={v => onValueChange('assignPerson', v)}
              title={'Assign Person'}
              data={assignPerson && assignPerson}
              star={true}
            />
            <CustomTextBox
              value={newHelpDesk.comment}
              onValueChange={v => onValueChange('comment', v)}
              title={'Comment'}
            />

            <View
              style={{
                width: '90%',
                height: 100,
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                }}>
                <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                  Attachment
                </Text>
                <TouchableOpacity
                  style={{
                    width: 130,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGray1,
                  }}
                  onPress={() => onClickAttachment()}>
                  <Text style={{color: COLORS.black, fontSize: SIZES.body6}}>
                    Choose Attachment
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  alignItems: 'center',
                }}>
                {fileResponse.map((file, index) => (
                  <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {file?.uri}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.btnAdd} onPress={() => onSubmit()}>
            <Text style={{color: COLORS.white, fontSize: SIZES.body3}}>
              Submit
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : title == 'View' ? (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View
            style={{
              height: 50,
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: COLORS.primary,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Image
                  source={Icon.back}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                  }}
                />
              </TouchableOpacity>

              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    color: COLORS.white,
                  }}>
                  Help Desk
                </Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.container}>
            <CustomTextBox
              value={helpDeskViewData.ticket_type}
              title={'Internal / External'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.ticket_name}
              title={'Ticket Name'}
              star={true}
              disable={false}
            />
            <View
              style={{
                width: '90%',
                height: 80,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                Ticket Name
                <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
                  *
                </Text>
              </Text>
              <View>
                <TextInput
                  style={{
                    height: 50,
                    backgroundColor: COLORS.lightGray1,
                    padding: 10,
                  }}
                  editable={false}
                  multiline
                  value={helpDeskViewData.ticket_name}
                />
              </View>
            </View>
            <CustomTextBox
              value={helpDeskViewData.deptname}
              title={'Requested Department'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.category_name}
              title={'Ticket Main Category'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.sub_category_name}
              title={'Ticket Sub Category'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.ticket_status}
              title={'Ticket Status'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.severityName}
              title={'Severity'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.priorityName}
              title={'Priority'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.branch_name}
              title={'Location Branch'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.fullname}
              title={'Assignment Person'}
              star={true}
              disable={false}
            />
            <CustomTextBox
              value={helpDeskViewData.action_status == 1 ? 'Accept' : 'Reject'}
              title={'Action Status'}
              star={true}
              disable={false}
            />
            <View
              style={{
                width: '90%',
                height: 120,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                Ticket Description
                <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
                  *
                </Text>
              </Text>
              <View>
                <TextInput
                  style={{
                    height: 100,
                    backgroundColor: COLORS.lightGray1,
                    padding: 10,
                  }}
                  editable={false}
                  multiline
                  value={helpDeskViewData.ticket_desc}
                />
              </View>
            </View>
            <View
              style={{
                width: '90%',
                height: 120,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
                Requester Comment
                <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
                  *
                </Text>
              </Text>
              <View>
                <TextInput
                  style={{
                    height: 100,
                    backgroundColor: COLORS.lightGray1,
                    padding: 10,
                  }}
                  editable={false}
                  multiline
                  value={helpDeskViewData.request_comment}
                />
              </View>
            </View>
            <View style={styles.requesterInfo}>
              <View
                style={{
                  width: '100%',
                  height: 40,
                  backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.body4,
                    marginLeft: 10,
                  }}>
                  Requester Information
                </Text>
              </View>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.infoBox}>
                  <Text style={styles.head}>Name</Text>
                  <Text style={styles.info}>
                    {requesterInformation.fullname}
                  </Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.head}>Email</Text>
                  <Text style={styles.info}>{requesterInformation.email}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.head}>Department</Text>
                  <Text style={styles.info}>
                    {requesterInformation.deptname}
                  </Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.head}>Name</Text>
                  <Text style={styles.info}>
                    {requesterInformation.branch_name}
                  </Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.head}>Phone Number</Text>
                  <Text style={styles.info}>{requesterInformation.phone}</Text>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : null}
    </>
  );
};

export default HelpDeskForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  btnAdd: {
    width: '80%',
    height: 40,
    backgroundColor: COLORS.primary,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  requesterInfo: {
    width: '95%',
    height: 160,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGray1,
    alignSelf: 'center',
  },
  scrollView: {
    width: '100%',
    height: 120,
  },
  infoBox: {
    width: 200,
    height: '100%',
  },
  head: {
    color: COLORS.black,
    fontSize: SIZES.body3,
  },
});
