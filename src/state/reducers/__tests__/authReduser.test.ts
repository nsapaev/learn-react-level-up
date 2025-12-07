import { authReducer, initialAuthState } from "../authReducer";
import { describe, expect, test } from "vitest";

describe("authReducer", () => {
  test("LOGIN_REQUEST sets loading true and clears error", () => {
    const action = { type: "LOGIN_REQUEST" } as const;

    const newState = authReducer(initialAuthState, action);

    expect(newState.isLoading).toBe(true);
    expect(newState.error).toBe(null);
  });
});
