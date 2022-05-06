import {helpDeskApiList, getApi, postApi} from '../api';

const getHelpDesk = (userId, startDate, endDate, status, setData) => {
  getApi(
    `${helpDeskApiList.getHelpDesk}/${userId}/${startDate}/${endDate}/${status}`,
    data => {
      setData(data);
    },
  );
};

const getTicketMainCategory = setData => {
  getApi(`${helpDeskApiList.getTicketMainCategory}`, data => {
    setData(data);
  });
};

const getTicketSubCategory = setData => {
  getApi(`${helpDeskApiList.getTicketSubCategory}`, data => {
    setData(data);
  });
};

const getTicketStatus = setData => {
  getApi(`${helpDeskApiList.getTicketStatus}`, data => {
    setData(data);
  });
};

const getTicketCategoryType = setData => {
  getApi(`${helpDeskApiList.getTicketCategoryType}`, data => {
    setData(data);
  });
};

const getBranch = setData => {
  getApi(`${helpDeskApiList.getBranch}`, data => {
    setData(data);
  });
};

const getPriority = setData => {
  getApi(`${helpDeskApiList.getPriority}`, data => {
    setData(data);
  });
};

const getDepartment = setData => {
  getApi(`${helpDeskApiList.getDepartment}`, data => {
    setData(data);
  });
};

const getAssignPersonByBranchAndDepartment = (depId, branchId, setData) => {
  getApi(
    `${helpDeskApiList.getAssignPersonByBranchAndDepartment}/${depId}/${branchId}`,
    data => {
      setData(data);
    },
  );
};

const addHelpDesk = (obj, setData) => {
  postApi(`${helpDeskApiList.addHelpDesk}`, obj, data => {
    setData(data);
  });
};

const getHelpDeskViewData = (ticketId, setData) => {
  getApi(`${helpDeskApiList.getHelpDeskViewData}/${ticketId}`, data => {
    setData(data);
  });
};

const getRequesterInformation = (userId, setData) => {
  getApi(`${helpDeskApiList.getRequesterInformation}/${userId}`, data => {
    setData(data);
  });
};

export const HelpDeskController = {
  getHelpDesk,
  getTicketMainCategory,
  getTicketSubCategory,
  getTicketStatus,
  getTicketCategoryType,
  getBranch,
  getPriority,
  getDepartment,
  getAssignPersonByBranchAndDepartment,
  addHelpDesk,
  getHelpDeskViewData,
  getRequesterInformation,
};
