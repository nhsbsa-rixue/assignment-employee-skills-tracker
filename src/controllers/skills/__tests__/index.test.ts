import { StatusCodes } from 'http-status-codes';
import { skillController } from '../index';

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

describe('skill controllers', () => {
  test('should return a list of skills', async () => {
    // given /when
    await skillController.List(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });

  test('should return a single skill', async () => {
    // given
    mockRequest.params.id = '1';

    // when
    await skillController.Get(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });
  
  test('should create a new skill', async () => {
    // given
    mockRequest.body = {
      name: 'Java',
    };

    // when
    await skillController.Post(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.CREATED);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });

  test('should update an existing skill', async () => {
    // given
    mockRequest.body = {
      name: 'Node.js',
    };

    // when
    await skillController.Post(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.CREATED);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });

  test('should delete a skill', async () => {
    // given
    mockRequest.params.id = '1';

    // when
    await skillController.Delete(mockRequest, mockResponse);

    // then
    expect(mockResponse.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(mockResponse.json).toHaveBeenCalledWith({});
  });
});