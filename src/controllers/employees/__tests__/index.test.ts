import { StatusCodes } from 'http-status-codes';
import { employeeController } from '../index';

let mockRequest;
let mockResponse;

beforeEach(() => {
  mockRequest = {
    params: {},
    body: {},
  };
  mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
});

describe('employee controllers', () => {
  test('should return a list of employees', async () => {
    // given /when
    await employeeController.List(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });

  test('should return a single employee', async () => {
    // given
    mockRequest.params.id = '1';

    // when
    await employeeController.Get(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });
  
  test('should create a new employee', async () => {
    // given
    mockRequest.body = {
      skillId: 'a1234567',
      level: "Working",
      yearsOfExperience: 3,
    };

    // when
    await employeeController.Post(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.CREATED);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });

  test('should update an existing employee', async () => {
    // given
    mockRequest.body = {
      skillId: 'a1234567',
      level: "Expert",
      yearsOfExperience: 5,
    };

    // when
    await employeeController.Post(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.CREATED);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });

  test('should delete a single employee', async () => {
    // given
    mockRequest.params.id = '1';

    // when
    await employeeController.Delete(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });
});